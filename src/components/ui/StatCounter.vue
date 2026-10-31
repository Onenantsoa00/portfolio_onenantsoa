<template>
  <div ref="root" class="stat">
    <p class="stat__value">
      {{ display }}<span v-if="suffix" class="stat__suffix">{{ suffix }}</span>
    </p>
    <p class="stat__label">{{ label }}</p>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

const props = defineProps({
  value: { type: Number, required: true },
  label: { type: String, required: true },
  suffix: { type: String, default: '' },
})

const root = ref(null)
const display = ref(0)
const reducedMotion = usePreferredReducedMotion()
let frame = 0

const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3)

const count = () => {
  const duration = 1100
  const start = performance.now()

  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration)
    display.value = Math.round(easeOutCubic(progress) * props.value)
    if (progress < 1) frame = requestAnimationFrame(step)
  }

  frame = requestAnimationFrame(step)
}

useIntersectionObserver(
  root,
  ([entry]) => {
    if (!entry.isIntersecting) return
    if (reducedMotion.value === 'reduce') display.value = props.value
    else count()
  },
  { threshold: 0.5 },
)

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<style scoped>
.stat {
  display: grid;
  gap: 4px;
}

.stat__value {
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 600;
  font-feature-settings: 'tnum';
}

.stat__suffix {
  color: var(--accent);
}

.stat__label {
  font-size: 0.82rem;
  line-height: 1.4;
  color: var(--muted);
}
</style>
