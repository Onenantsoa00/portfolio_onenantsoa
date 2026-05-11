<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-dark text-white" style="opacity: 0.9">
      <q-toolbar>
        <q-toolbar-title>Ntsoa Ranaivo</q-toolbar-title>
        <q-space />
        <q-btn flat label="Accueil" @click="scrollToSection('hero')" />
        <q-btn flat label="À propos" @click="scrollToSection('about')" />
        <q-btn flat label="Compétences" @click="scrollToSection('skills')" />
        <q-btn flat label="Expérience" @click="scrollToSection('experience')" />
        <q-btn flat label="Projets" @click="scrollToSection('projects')" />
        <q-btn flat label="Contact" @click="scrollToSection('contact')" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// Enable dark mode
import { onMounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

onMounted(() => {
  $q.dark.set(true)
})

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
