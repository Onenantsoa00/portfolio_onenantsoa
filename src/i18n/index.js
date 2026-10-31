import { ref } from 'vue'
import { SUPPORTED_LOCALES, localeOptions, messages } from './messages'

const STORAGE_KEY = 'site_language'
const isBrowser = typeof window !== 'undefined'

const normalize = (value) => {
  if (!value) return null
  const base = String(value).toLowerCase().split('-')[0]
  return SUPPORTED_LOCALES.includes(base) ? base : null
}

const detectLocale = () => {
  if (!isBrowser) return 'fr'
  const saved = normalize(localStorage.getItem(STORAGE_KEY))
  if (saved) return saved
  const preferred = navigator.languages?.[0] || navigator.language
  return normalize(preferred) || 'fr'
}

export const locale = ref(detectLocale())

const resolve = (dictionary, path) =>
  path.split('.').reduce((value, key) => (value == null ? value : value[key]), dictionary)

/**
 * Translate a dotted key, falling back to French and finally to the key itself.
 * Reads the reactive locale so templates re-render on language change.
 */
export const t = (path) => {
  const value = resolve(messages[locale.value], path)
  if (value !== undefined) return value
  const fallback = resolve(messages.fr, path)
  return fallback !== undefined ? fallback : path
}

export const setLocale = (value) => {
  if (!SUPPORTED_LOCALES.includes(value)) return
  locale.value = value
  if (!isBrowser) return
  localStorage.setItem(STORAGE_KEY, value)
  document.documentElement.lang = value
}

export const syncDocumentLanguage = () => {
  if (isBrowser) document.documentElement.lang = locale.value
}

export { localeOptions }
export { SUPPORTED_LOCALES }
