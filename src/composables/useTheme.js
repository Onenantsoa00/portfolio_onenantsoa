import { computed, ref, watch } from 'vue'
import { Dark } from 'quasar'

const STORAGE_KEY = 'site_theme'
const isBrowser = typeof window !== 'undefined'
const mediaQuery =
  isBrowser && window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null

const readPreference = () => {
  if (!isBrowser) return 'system'
  const saved = localStorage.getItem(STORAGE_KEY)
  return ['system', 'light', 'dark'].includes(saved) ? saved : 'system'
}

export const themePreference = ref(readPreference())
export const systemPrefersDark = ref(Boolean(mediaQuery?.matches))
export const isDark = computed(
  () =>
    themePreference.value === 'dark' ||
    (themePreference.value === 'system' && systemPrefersDark.value),
)

const applyTheme = (dark) => {
  Dark.set(dark)
  if (!isBrowser) return
  const root = document.documentElement
  root.dataset.theme = dark ? 'dark' : 'light'
  root.style.colorScheme = dark ? 'dark' : 'light'
}

let initialized = false

/** Called once from the layout: applies the saved theme and follows the OS setting. */
export const initTheme = () => {
  if (!initialized) {
    initialized = true
    mediaQuery?.addEventListener?.('change', (event) => {
      systemPrefersDark.value = event.matches
    })
    watch(isDark, applyTheme, { immediate: true })
  } else {
    applyTheme(isDark.value)
  }
}

export const setThemePreference = (value) => {
  if (!['system', 'light', 'dark'].includes(value)) return
  themePreference.value = value
  if (isBrowser) localStorage.setItem(STORAGE_KEY, value)
}

export const useTheme = () => ({ themePreference, isDark, setThemePreference })
