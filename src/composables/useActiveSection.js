import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Highlights the nav item of the section currently in the middle of the viewport.
 */
export const useActiveSection = (ids, initial = '') => {
  const active = ref(initial)
  let observer = null

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const visible = new Map()

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visible.set(entry.target.id, entry.isIntersecting)
        })
        const current = ids.find((id) => visible.get(id))
        if (current) active.value = current
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    ids.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
