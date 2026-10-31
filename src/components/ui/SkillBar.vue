<template>
  <div ref="root" class="skill-bar" :class="{ 'is-visible': visible }">
    <div class="skill-bar__head">
      <span class="skill-bar__label">{{ label }}</span>
      <span class="skill-bar__value mono-label">{{ value }}%</span>
    </div>
    <div
      class="skill-bar__track"
      role="progressbar"
      :aria-label="label"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <span class="skill-bar__fill" :style="{ width: visible ? `${value}%` : '0%' }" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

defineProps({
  label: { type: String, required: true },
  value: { type: Number, required: true },
})

const root = ref(null)
const reducedMotion = usePreferredReducedMotion()
const visible = ref(reducedMotion.value === 'reduce')

useIntersectionObserver(
  root,
  ([entry]) => {
    if (entry.isIntersecting) visible.value = true
  },
  { threshold: 0.4 },
)
</script>

<style scoped>
.skill-bar {
  display: grid;
  gap: 8px;
}

.skill-bar__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.skill-bar__label {
  font-size: 0.92rem;
  color: var(--ink-soft);
}

.skill-bar__value {
  font-size: 0.68rem;
}

.skill-bar__track {
  height: 4px;
  border-radius: 999px;
  background: var(--surface-soft);
  overflow: hidden;
}

.skill-bar__fill {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width 1100ms cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
