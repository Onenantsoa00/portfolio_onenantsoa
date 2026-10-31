<template>
  <q-layout view="hHh lpR fFf">
    <AnimatedBackdrop />
    <ClickBurst />
    <q-header class="app-header" :class="{ 'is-scrolled': scrolled }">
      <div class="container app-header__inner">
        <button type="button" class="brand" :aria-label="t('nav.home')" @click="scrollTo('home')">
          <img src="/images/logo.png" alt="" class="brand__mark" width="34" height="34" />
          <span class="brand__name">Onenantsoa<span class="brand__dot">.</span></span>
        </button>

        <nav class="nav" :aria-label="t('ui.menu')">
          <button
            v-for="link in navLinks"
            :key="link.id"
            type="button"
            class="nav__link"
            :class="{ 'is-active': activeSection === link.id }"
            :aria-current="activeSection === link.id ? 'true' : undefined"
            @click="scrollTo(link.id)"
          >
            {{ t(link.label) }}
          </button>
        </nav>

        <div class="header__actions">
          <ThemeToggle class="header__theme" />
          <LangSwitcher />
          <AppButton
            class="header__cv"
            href="/cv_onenantsoa.pdf"
            download
            variant="primary"
            size="sm"
            icon="download"
          >
            {{ t('ui.cv') }}
          </AppButton>
          <button
            type="button"
            class="icon-btn header__menu"
            :aria-label="t('ui.menu')"
            :aria-expanded="drawer"
            @click="drawer = true"
          >
            <q-icon name="menu" size="21px" aria-hidden="true" />
          </button>
        </div>
      </div>
      <ScrollProgress />
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay :width="310" class="app-drawer">
      <div class="drawer__inner">
        <div class="drawer__head">
          <span class="mono-label">{{ t('ui.menu') }}</span>
          <button
            type="button"
            class="icon-btn"
            :aria-label="t('ui.close')"
            @click="drawer = false"
          >
            <q-icon name="close" size="20px" aria-hidden="true" />
          </button>
        </div>

        <nav class="drawer__nav">
          <button
            v-for="link in navLinks"
            :key="link.id"
            type="button"
            class="drawer__link"
            :class="{ 'is-active': activeSection === link.id }"
            @click="navigate(link.id)"
          >
            {{ t(link.label) }}
          </button>
        </nav>

        <div class="drawer__controls">
          <ThemeToggle />
          <LangSwitcher />
        </div>

        <AppButton href="/cv_onenantsoa.pdf" download variant="outline" icon="download">
          {{ t('hero.cta_cv') }}
        </AppButton>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { locale, syncDocumentLanguage, t } from 'src/i18n'
import { initTheme } from 'src/composables/useTheme'
import { useActiveSection } from 'src/composables/useActiveSection'
import { useScrollToSection } from 'src/composables/useScrollToSection'
import AnimatedBackdrop from 'src/components/ui/AnimatedBackdrop.vue'
import AppButton from 'src/components/ui/AppButton.vue'
import ClickBurst from 'src/components/ui/ClickBurst.vue'
import LangSwitcher from 'src/components/ui/LangSwitcher.vue'
import ScrollProgress from 'src/components/ui/ScrollProgress.vue'
import ThemeToggle from 'src/components/ui/ThemeToggle.vue'

const navLinks = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'journey', label: 'nav.journey' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'contact', label: 'nav.contact' },
]

const drawer = ref(false)
const { y } = useWindowScroll()
const scrolled = ref(false)
const activeSection = useActiveSection(['about', 'skills', 'journey', 'projects', 'contact'])
const { scrollTo } = useScrollToSection()

watch(y, (value) => {
  scrolled.value = value > 8
})

const navigate = async (id) => {
  drawer.value = false
  await new Promise((resolve) => setTimeout(resolve, 180))
  scrollTo(id)
}

const updateDocumentMeta = () => {
  document.title = t('meta.title')
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', t('meta.description'))
}

onMounted(() => {
  initTheme()
  syncDocumentLanguage()
  updateDocumentMeta()
})

watch(locale, () => {
  syncDocumentLanguage()
  updateDocumentMeta()
})
</script>

<style scoped>
.app-header {
  background: var(--header-bg);
  backdrop-filter: blur(18px) saturate(150%);
  -webkit-backdrop-filter: blur(18px) saturate(150%);
  border-bottom: 1px solid transparent;
  box-shadow: none;
  transition:
    background-color 300ms ease,
    border-color 300ms ease;
}

.app-header.is-scrolled {
  border-bottom-color: var(--line);
}

.app-header__inner {
  display: flex;
  align-items: center;
  gap: clamp(10px, 2vw, 26px);
  height: 68px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--ink);
  cursor: pointer;
}

.brand__mark {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  object-fit: cover;
}

.brand__name {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.brand__dot {
  color: var(--accent);
}

.nav {
  display: none;
  margin-inline: auto;
  gap: 2px;
}

.nav__link {
  position: relative;
  padding: 8px 11px;
  border: 0;
  border-radius: 8px;
  background: none;
  color: var(--muted);
  font-family: inherit;
  font-size: 0.86rem;
  cursor: pointer;
  transition: color 180ms ease;
}

.nav__link:hover {
  color: var(--ink);
}

.nav__link.is-active {
  color: var(--ink);
}

.nav__link.is-active::after {
  content: '';
  position: absolute;
  left: 11px;
  right: 11px;
  bottom: 2px;
  height: 1px;
  background: var(--accent);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.icon-btn {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
}

.header__menu {
  display: grid;
}

.app-drawer {
  background: var(--surface);
  color: var(--ink);
}

.drawer__inner {
  display: flex;
  flex-direction: column;
  gap: 22px;
  height: 100%;
  padding: 20px;
}

.drawer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.drawer__link {
  padding: 12px 10px;
  border: 0;
  border-radius: 10px;
  background: none;
  color: var(--ink-soft);
  font-family: inherit;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
}

.drawer__link.is-active {
  background: var(--accent-wash);
  color: var(--accent);
}

.drawer__controls {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  margin-top: auto;
}

@media (min-width: 1000px) {
  .nav {
    display: flex;
  }

  .header__menu {
    display: none;
  }
}

@media (max-width: 620px) {
  .header__cv {
    display: none;
  }

  .header__theme {
    display: none;
  }

  .app-header__inner {
    height: 60px;
  }
}
</style>
