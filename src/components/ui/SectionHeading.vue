<template>
  <header class="section-heading">
    <p v-if="index" class="section-heading__index mono-label">{{ index }}</p>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="lead" class="section-heading__lead">{{ lead }}</p>
  </header>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  index: { type: String, default: '' },
})
</script>

<style scoped>
.section-heading {
  display: grid;
  gap: 14px;
  max-width: 62ch;
  margin-bottom: clamp(32px, 4vw, 56px);
}

.section-heading__index {
  margin: 0;
}

.section-heading__title {
  font-size: clamp(1.75rem, 3.4vw, 2.65rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.section-heading__lead {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--muted);
  max-width: 56ch;
}
</style>
