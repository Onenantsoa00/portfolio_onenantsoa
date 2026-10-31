import { nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { usePreferredReducedMotion } from '@vueuse/core'

const HEADER_OFFSET = 84

/**
 * Smoothly scrolls to a section, navigating to the home page first when needed.
 * Falls back to an instant jump when the visitor prefers reduced motion.
 */
export const useScrollToSection = () => {
  const router = useRouter()
  const reducedMotion = usePreferredReducedMotion()

  const scrollTo = async (id) => {
    if (router.currentRoute.value.path !== '/') {
      await router.push('/')
      await nextTick()
    }

    const element = document.getElementById(id)
    if (!element) return

    const behavior = reducedMotion.value === 'reduce' ? 'auto' : 'smooth'
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
      behavior,
    })
  }

  return { scrollTo }
}
