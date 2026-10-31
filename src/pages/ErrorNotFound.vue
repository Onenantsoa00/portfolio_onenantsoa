<template>
  <div class="not-found">
    <div class="not-found__code" aria-hidden="true">404</div>
    <h1 class="not-found__title">{{ t('notFound.title') }}</h1>
    <p class="not-found__text">{{ t('notFound.text') }}</p>
    <AppButton
      class="not-found__action"
      variant="primary"
      icon="arrow_back"
      @click="router.push('/')"
    >
      {{ t('notFound.action') }}
    </AppButton>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { t } from 'src/i18n'
import AppButton from 'src/components/ui/AppButton.vue'

const router = useRouter()
</script>

<style scoped>
.not-found {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 14px;
  min-height: 100vh;
  padding: 24px;
  text-align: center;
  background: var(--ground);
  color: var(--ink);
}

.not-found__code {
  font-size: clamp(4rem, 18vw, 9rem);
  line-height: 1;
  font-weight: 600;
  letter-spacing: -0.06em;
  color: var(--accent);
  opacity: 0.9;
}

.not-found__title {
  font-size: clamp(1.4rem, 3vw, 2rem);
}

.not-found__text {
  max-width: 46ch;
  color: var(--muted);
}

.not-found__action {
  margin-top: 8px;
}
</style>
