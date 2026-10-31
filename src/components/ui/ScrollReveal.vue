<template>
  <div ref="root" class="reveal" :class="{ 'is-visible': visible }" :style="revealStyle">
    <slot />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useIntersectionObserver, usePreferredReducedMotion } from '@vueuse/core'

const props = defineProps({
  delay: { type: Number, default: 0 },
  distance: { type: Number, default: 24 },
})

const root = ref(null)
const reducedMotion = usePreferredReducedMotion()
const visible = ref(reducedMotion.value === 'reduce')

useIntersectionObserver(
  root,
  ([entry]) => {
    if (entry.isIntersecting) visible.value = true
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

const revealStyle = computed(() => ({
  '--reveal-delay': `${props.delay}ms`,
  '--reveal-distance': `${props.distance}px`,
}))
</script>
