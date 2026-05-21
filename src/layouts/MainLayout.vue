<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark text-white" style="opacity: 0.95">
      <q-toolbar class="q-gutter-sm">
        <q-toolbar-title class="row items-center no-wrap">
          <img
            src="/images/logo.png"
            alt="Onenantsoa"
            style="
              height: 40px;
              width: 40px;
              border-radius: 10px;
              margin-right: 12px;
              object-fit: cover;
            "
          />
          Onenantsoa
        </q-toolbar-title>

        <q-space />

        <div v-if="$q.screen.gt.sm" class="row items-center">
          <q-btn flat label="Accueil" @click="scrollToSection('hero')" />
          <q-btn flat label="À propos" @click="scrollToSection('about')" />
          <q-btn flat label="Compétences" @click="scrollToSection('skills')" />
          <q-btn flat label="Expérience" @click="scrollToSection('experience')" />
          <q-btn flat label="Langues" @click="scrollToSection('languages')" />
          <q-btn flat label="Projets" @click="scrollToSection('projects')" />
          <q-btn flat label="Contact" @click="scrollToSection('contact')" />
        </div>

        <q-btn
          v-if="!$q.screen.gt.sm"
          dense
          flat
          round
          icon="menu"
          @click="drawer = !drawer"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay class="bg-dark text-white">
      <q-list>
        <q-item clickable @click="navigateDrawer('hero')">
          <q-item-section>Accueil</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('about')">
          <q-item-section>À propos</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('skills')">
          <q-item-section>Compétences</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('experience')">
          <q-item-section>Expérience</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('languages')">
          <q-item-section>Langues</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('projects')">
          <q-item-section>Projets</q-item-section>
        </q-item>
        <q-item clickable @click="navigateDrawer('contact')">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const drawer = ref(false)

onMounted(() => {
  $q.dark.set(true)
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

import { nextTick } from 'vue'

const navigateDrawer = async (sectionId) => {
  // close drawer first so overlay won't block scrolling
  drawer.value = false
  // wait a bit for drawer animation to finish
  await new Promise((r) => setTimeout(r, 180))
  await nextTick()
  const element = document.getElementById(sectionId)
  if (element) element.scrollIntoView({ behavior: 'smooth' })
}
</script>
