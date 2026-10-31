<template>
  <div class="click-layer" aria-hidden="true">
    <span
      v-for="burst in bursts"
      :key="burst.id"
      class="burst"
      :style="{ left: `${burst.x}px`, top: `${burst.y}px` }"
    >
      <span class="burst__flash"></span>
      <span class="burst__ring"></span>
      <span
        v-for="bolt in burst.bolts"
        :key="bolt.id"
        class="burst__bolt"
        :style="{ '--angle': `${bolt.angle}deg`, '--delay': `${bolt.delay}ms` }"
      >
        <svg viewBox="0 0 12 40" focusable="false">
          <path d="M7 0 L1 17 L6 17 L3 40 L11 21 L6 21 Z" />
        </svg>
      </span>
    </span>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

const BOLT_COUNT = 10
const MAX_ACTIVE = 5
const LIFETIME = 900

const bursts = ref([])
const reducedMotion = usePreferredReducedMotion()

let nextId = 1
let active = 0

const spawn = (event) => {
  if (event.button !== 0) return
  if (reducedMotion.value === 'reduce' || active >= MAX_ACTIVE) return

  const id = nextId
  nextId += 1
  active += 1

  const bolts = Array.from({ length: BOLT_COUNT }, (_, index) => ({
    id: index,
    angle: Math.round((360 / BOLT_COUNT) * index + Math.random() * 18),
    delay: Math.round(Math.random() * 70),
  }))

  bursts.value.push({ id, x: event.clientX, y: event.clientY, bolts })

  window.setTimeout(() => {
    bursts.value = bursts.value.filter((burst) => burst.id !== id)
    active -= 1
  }, LIFETIME)
}

onMounted(() => window.addEventListener('pointerdown', spawn, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('pointerdown', spawn))
</script>

<style scoped>
.click-layer {
  position: fixed;
  inset: 0;
  z-index: 5000;
  overflow: hidden;
  pointer-events: none;
}

.burst {
  position: absolute;
  width: 0;
  height: 0;
}

.burst__flash {
  position: absolute;
  left: -26px;
  top: -26px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-wash), transparent 70%);
  animation: flash 480ms ease-out forwards;
}

.burst__ring {
  position: absolute;
  left: -8px;
  top: -8px;
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  animation: ring 620ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.burst__bolt {
  position: absolute;
  left: -6px;
  top: -20px;
  width: 12px;
  height: 40px;
  transform-origin: 50% 50%;
  animation: bolt 640ms cubic-bezier(0.16, 1, 0.3, 1) var(--delay) forwards;
}

.burst__bolt svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: var(--accent);
  filter: drop-shadow(0 0 4px var(--accent));
}

@keyframes bolt {
  0% {
    transform: rotate(var(--angle)) translateY(-4px) scale(0.5);
    opacity: 0;
  }
  22% {
    opacity: 1;
  }
  100% {
    transform: rotate(var(--angle)) translateY(-62px) scale(1.05);
    opacity: 0;
  }
}

@keyframes ring {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  100% {
    transform: scale(6);
    opacity: 0;
  }
}

@keyframes flash {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .burst__flash,
  .burst__ring,
  .burst__bolt {
    animation: none;
    opacity: 0;
  }
}
</style>
