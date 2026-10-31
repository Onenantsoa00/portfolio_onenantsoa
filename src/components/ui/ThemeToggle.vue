<template>
  <div class="theme-toggle" role="group" :aria-label="t('ui.theme')">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="theme-toggle__btn"
      :class="{ 'is-active': themePreference === option.value }"
      :aria-pressed="themePreference === option.value"
      :aria-label="t(option.label)"
      :title="t(option.label)"
      @click="setThemePreference(option.value)"
    >
      <q-icon :name="option.icon" size="16px" aria-hidden="true" />
    </button>
  </div>
</template>

<script setup>
import { t } from 'src/i18n'
import { setThemePreference, themePreference } from 'src/composables/useTheme'

const options = [
  { value: 'light', icon: 'light_mode', label: 'ui.theme_light' },
  { value: 'system', icon: 'brightness_auto', label: 'ui.theme_system' },
  { value: 'dark', icon: 'dark_mode', label: 'ui.theme_dark' },
]
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
}

.theme-toggle__btn {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
  transition:
    background-color 200ms ease,
    color 200ms ease;
}

.theme-toggle__btn:hover {
  color: var(--ink);
}

.theme-toggle__btn.is-active {
  background: var(--accent-wash);
  color: var(--accent);
}
</style>
