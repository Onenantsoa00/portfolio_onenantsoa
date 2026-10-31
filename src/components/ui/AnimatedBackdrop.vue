<template>
  <div class="backdrop" aria-hidden="true">
    <canvas ref="canvas" class="backdrop__canvas"></canvas>
    <span class="backdrop__grid"></span>
    <span class="backdrop__glow"></span>
    <span class="backdrop__scanlines"></span>
    <span class="backdrop__fade"></span>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

const canvas = ref(null)
const reducedMotion = usePreferredReducedMotion()

// Snippets of code rather than random letters: it reads as a developer banner.
const GLYPHS = [
  '{',
  '}',
  '<div>',
  '</>',
  '=>',
  ';',
  '()',
  '01',
  '10',
  '0x1F',
  'const',
  'await',
  'npm',
  'git',
  'api',
  'db',
  'SQL',
  '++',
  '&&',
  '===',
  '#',
  'vue',
  'node',
  'v-if',
]
const LINE_HEIGHT = 19
const COLUMN_GAP = 56

let context = null
let frame = 0
let lastTime = 0
let width = 0
let height = 0
let columns = []
let accent = '143, 141, 255'
let themeObserver = null

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

const toRgb = (value) => {
  const hex = value.trim().replace('#', '')
  if (hex.length !== 6) return accent
  return [0, 2, 4].map((index) => parseInt(hex.slice(index, index + 2), 16)).join(', ')
}

const readAccent = () => {
  const value = getComputedStyle(document.documentElement).getPropertyValue('--accent')
  accent = toRgb(value)
}

const createColumn = (x) => ({
  x,
  y: Math.random() * height,
  speed: 22 + Math.random() * 44,
  length: 9 + Math.floor(Math.random() * 8),
  size: 11 + Math.random() * 2.5,
  alpha: 0.3 + Math.random() * 0.32,
  glyphs: Array.from({ length: 18 }, randomGlyph),
})

const resetColumn = (column) => {
  column.y = -Math.random() * height * 0.8
  column.speed = 22 + Math.random() * 44
  column.length = 9 + Math.floor(Math.random() * 8)
  column.alpha = 0.3 + Math.random() * 0.32
  column.glyphs = Array.from({ length: 18 }, randomGlyph)
}

const measure = () => {
  if (!canvas.value || !context) return

  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.value.width = Math.floor(width * ratio)
  canvas.value.height = Math.floor(height * ratio)
  canvas.value.style.width = `${width}px`
  canvas.value.style.height = `${height}px`
  context.setTransform(ratio, 0, 0, ratio, 0, 0)
  context.textAlign = 'center'
  context.textBaseline = 'middle'

  const count = Math.max(6, Math.floor(width / COLUMN_GAP))
  columns = Array.from({ length: count }, (_, index) =>
    createColumn(index * COLUMN_GAP + COLUMN_GAP / 2),
  )
}

const draw = (delta = 0) => {
  if (!context) return
  context.clearRect(0, 0, width, height)

  for (const column of columns) {
    column.y += column.speed * delta
    if (column.y - column.length * LINE_HEIGHT > height) resetColumn(column)

    for (let index = 0; index < column.length; index += 1) {
      const y = column.y - index * LINE_HEIGHT
      if (y < -LINE_HEIGHT || y > height + LINE_HEIGHT) continue

      const fade = 1 - index / column.length
      context.globalAlpha = fade * column.alpha
      context.fillStyle = `rgb(${accent})`
      context.font = `${column.size}px "JetBrains Mono", monospace`
      context.fillText(column.glyphs[index % column.glyphs.length], column.x, y)
    }
  }

  context.globalAlpha = 1
}

const loop = (time) => {
  const delta = lastTime ? Math.min(0.05, (time - lastTime) / 1000) : 0
  lastTime = time
  draw(delta)
  frame = requestAnimationFrame(loop)
}

const start = () => {
  if (reducedMotion.value === 'reduce') {
    draw(0)
    return
  }
  cancelAnimationFrame(frame)
  lastTime = 0
  frame = requestAnimationFrame(loop)
}

const stop = () => cancelAnimationFrame(frame)

const handleVisibility = () => {
  if (document.hidden) stop()
  else start()
}

const handleResize = () => {
  measure()
  if (reducedMotion.value === 'reduce') draw(0)
}

onMounted(() => {
  context = canvas.value?.getContext('2d')
  if (!context) return

  readAccent()
  measure()
  start()

  window.addEventListener('resize', handleResize, { passive: true })
  document.addEventListener('visibilitychange', handleVisibility)

  themeObserver = new MutationObserver(readAccent)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme', 'style'],
  })
})

onBeforeUnmount(() => {
  stop()
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('visibilitychange', handleVisibility)
  themeObserver?.disconnect()
})
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.backdrop__canvas {
  position: absolute;
  inset: 0;
  opacity: 0.4;
}

.backdrop__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 84px 84px;
  opacity: 0.55;
  mask-image: radial-gradient(ellipse 85% 65% at 50% 0%, #000 5%, transparent 72%);
  -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 0%, #000 5%, transparent 72%);
}

.backdrop__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 70% 45% at 50% -8%, var(--accent-wash), transparent 72%);
}

.backdrop__scanlines {
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 4px);
  opacity: 0.28;
}

.backdrop__fade {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 26vh;
  background: linear-gradient(to bottom, transparent, var(--ground));
}

html[data-theme='dark'] .backdrop__canvas {
  opacity: 0.55;
}

@media (max-width: 620px) {
  .backdrop__canvas {
    opacity: 0.3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .backdrop__canvas {
    opacity: 0.3;
  }
}
</style>
