<template>
  <div
    ref="root"
    class="tilt-card"
    :class="{ 'is-tilting': tilting }"
    :style="tiltStyle"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
    @pointercancel="onPointerLeave"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

const props = defineProps({
  max: { type: Number, default: 7 },
  scale: { type: Number, default: 1.015 },
})

const root = ref(null)
const reducedMotion = usePreferredReducedMotion()
const tilting = ref(false)
const rotateX = ref(0)
const rotateY = ref(0)

const tiltStyle = computed(() => ({
  transform: `perspective(900px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale(${
    tilting.value ? props.scale : 1
  })`,
}))

const onPointerMove = (event) => {
  if (reducedMotion.value === 'reduce' || event.pointerType !== 'mouse' || !root.value) return

  const rect = root.value.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5

  rotateY.value = x * props.max * 2
  rotateX.value = -y * props.max * 2
  tilting.value = true
}

const onPointerLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
  tilting.value = false
}
</script>

<style scoped>
.tilt-card {
  transform-style: preserve-3d;
  transition:
    transform 420ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 420ms ease;
  will-change: transform;
}

.tilt-card.is-tilting {
  transition:
    transform 90ms linear,
    box-shadow 300ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .tilt-card {
    transition: none;
  }
}
</style>
