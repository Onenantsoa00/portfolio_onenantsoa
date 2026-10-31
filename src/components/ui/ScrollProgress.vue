<template>
  <div class="scroll-progress" aria-hidden="true">
    <span class="scroll-progress__bar" :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useEventListener } from '@vueuse/core'

const progress = ref(0)

const update = () => {
  const element = document.scrollingElement || document.documentElement
  const scrollable = element.scrollHeight - window.innerHeight
  progress.value = scrollable > 0 ? Math.min(1, element.scrollTop / scrollable) : 0
}

useEventListener(window, 'scroll', update, { passive: true })
useEventListener(window, 'resize', update, { passive: true })

onMounted(update)
</script>

<style scoped>
.scroll-progress {
  position: absolute;
  inset-inline: 0;
  bottom: -1px;
  height: 2px;
  overflow: hidden;
}

.scroll-progress__bar {
  display: block;
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: transform 120ms linear;
}
</style>
