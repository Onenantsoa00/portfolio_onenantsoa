<template>
  <div class="marquee">
    <div class="marquee__track">
      <span v-for="(item, position) in doubled" :key="`${item}-${position}`" class="marquee__item">
        {{ item }}
        <span class="marquee__dot" aria-hidden="true"></span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

// The list is printed twice so the loop has no visible seam.
const doubled = computed(() => [...props.items, ...props.items])
</script>

<style scoped>
.marquee {
  overflow: hidden;
  border-block: 1px solid var(--line);
  padding-block: 14px;
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

.marquee__track {
  display: flex;
  align-items: center;
  gap: 28px;
  width: max-content;
  animation: marquee 42s linear infinite;
}

.marquee:hover .marquee__track {
  animation-play-state: paused;
}

.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--muted);
  white-space: nowrap;
}

.marquee__dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--line-strong);
}

@keyframes marquee {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__track {
    animation: none;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
