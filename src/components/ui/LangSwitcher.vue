<template>
  <q-btn class="lang-switcher" round flat dense :aria-label="t('ui.language')">
    <span class="lang-switcher__code">{{ current.short }}</span>
    <q-icon name="expand_more" size="15px" aria-hidden="true" />
    <q-menu anchor="bottom right" self="top right" :offset="[0, 10]" class="lang-menu">
      <q-list class="lang-menu__list" role="menu">
        <q-item
          v-for="option in localeOptions"
          :key="option.value"
          v-close-popup
          clickable
          class="lang-menu__item"
          :class="{ 'is-active': locale === option.value }"
          role="menuitemradio"
          :aria-checked="locale === option.value"
          @click="setLocale(option.value)"
        >
          <span class="lang-menu__code">{{ option.short }}</span>
          <span class="lang-menu__label">{{ option.label }}</span>
          <q-icon v-if="locale === option.value" name="check" size="16px" />
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { computed } from 'vue'
import { locale, localeOptions, setLocale, t } from 'src/i18n'

const current = computed(
  () => localeOptions.find((option) => option.value === locale.value) || localeOptions[0],
)
</script>

<style scoped>
.lang-switcher {
  min-width: auto;
  padding: 6px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink);
  gap: 2px;
}

.lang-switcher__code {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}

.lang-menu__list {
  min-width: 176px;
  padding: 6px;
}

.lang-menu__item {
  border-radius: 10px;
  gap: 10px;
  padding: 8px 10px;
  font-size: 0.9rem;
  color: var(--ink);
}

.lang-menu__item.is-active {
  background: var(--accent-wash);
  color: var(--accent);
}

.lang-menu__code {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
  width: 20px;
}

.lang-menu__label {
  flex: 1;
}
</style>
