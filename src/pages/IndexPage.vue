<template>
  <q-page class="bg-dark text-white">
    <!-- Hero Section -->
    <section
      id="hero"
      class="hero-section flex flex-center column text-center q-pa-xl"
      style="min-height: 100vh"
    >
      <div data-aos="fade-up">
        <h1 class="text-h2 q-mb-md">Ntsoa Ranaivo</h1>
        <p class="text-h5 q-mb-lg">Développeur Full Stack Junior spécialisé en Vue.js et Node.js</p>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Voir mes projets" @click="scrollToSection('projects')" />
          <q-btn color="secondary" label="Télécharger CV" href="/cv.pdf" download />
          <q-btn color="accent" label="Contact" @click="scrollToSection('contact')" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-section q-pa-xl" style="min-height: 100vh" data-aos="fade-up">
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">À propos de moi</h2>
          <p class="text-body1">
            Passionné par le développement web et mobile. Je développe des applications avec Vue.js,
            Node.js, PostgreSQL. Actuellement en formation, je recherche des opportunités pour
            appliquer mes compétences et continuer à apprendre.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      id="skills"
      class="skills-section q-pa-xl bg-grey-9"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <h2 class="text-h3 q-mb-lg text-center">Compétences</h2>
          <div class="row q-gutter-md">
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">Frontend</div>
                  <div class="q-mb-sm">
                    <div>Vue.js</div>
                    <q-linear-progress value="0.8" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Quasar</div>
                    <q-linear-progress value="0.7" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>React Native</div>
                    <q-linear-progress value="0.6" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>HTML/CSS</div>
                    <q-linear-progress value="0.9" color="primary" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">Backend</div>
                  <div class="q-mb-sm">
                    <div>Node.js</div>
                    <q-linear-progress value="0.8" color="secondary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Express</div>
                    <q-linear-progress value="0.7" color="secondary" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">Base de données</div>
                  <div class="q-mb-sm">
                    <div>PostgreSQL</div>
                    <q-linear-progress value="0.7" color="accent" />
                  </div>
                  <div class="q-mb-sm">
                    <div>MongoDB</div>
                    <q-linear-progress value="0.6" color="accent" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">Outils</div>
                  <div class="q-mb-sm">
                    <div>Git</div>
                    <q-linear-progress value="0.8" color="positive" />
                  </div>
                  <div class="q-mb-sm">
                    <div>GitHub</div>
                    <q-linear-progress value="0.8" color="positive" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Docker</div>
                    <q-linear-progress value="0.5" color="positive" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Linux Ubuntu</div>
                    <q-linear-progress value="0.7" color="positive" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section
      id="experience"
      class="experience-section q-pa-xl"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">Expérience / Formation</h2>
          <q-timeline color="primary">
            <q-timeline-entry
              title="Licence en Informatique"
              subtitle="Université..."
              caption="2020 - 2023"
            />
            <q-timeline-entry title="Stage Développeur" subtitle="Entreprise..." caption="2023" />
            <q-timeline-entry
              title="Projets Personnels"
              subtitle="MoneyWise, Feuille de Temps"
              caption="2023 - Présent"
            />
          </q-timeline>
        </div>
      </div>
    </section>
    <section
      id="projects"
      class="projects-section q-pa-xl"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <h2 class="text-h3 q-mb-lg text-center">Projets</h2>
          <div class="row q-gutter-lg">
            <div class="col-12 col-md-6">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6">MoneyWise</div>
                  <p>
                    Application de gestion financière personnelle développée avec Vue.js et Node.js.
                  </p>
                  <p>Technologies: Vue.js, Node.js, PostgreSQL</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn
                    flat
                    label="GitHub"
                    href="https://github.com/Onenantsoa00/moneywise"
                    target="_blank"
                  />
                  <q-btn flat label="Démo" />
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-12 col-md-6">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6">Feuille de Temps</div>
                  <p>Application de suivi du temps de travail avec interface intuitive.</p>
                  <p>Technologies: Vue.js, Express, MongoDB</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn
                    flat
                    label="GitHub"
                    href="https://github.com/Onenantsoa00/feuille_de_temps"
                    target="_blank"
                  />
                  <q-btn flat label="Démo" />
                </q-card-actions>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="contact-section q-pa-xl bg-grey-9"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">Contact</h2>
          <div class="text-center q-mb-lg">
            <p>
              <q-icon name="email" /> Email:
              <a href="mailto:ranaivoonenantsoa@gmail.com">ranaivoonenantsoa@gmail.com</a>
            </p>
            <p>
              <q-icon name="fab fa-github" /> GitHub:
              <a href="https://github.com/Onenantsoa00" target="_blank">Onenantsoa00</a>
            </p>
            <p>
              <q-icon name="fab fa-linkedin" /> LinkedIn:
              <a href="https://linkedin.com/in/Onenantsoa Ranaivo" target="_blank"
                >Onenantsoa Ranaivo</a
              >
            </p>
            <p><q-icon name="phone" /> Téléphone: 0340865448</p>
          </div>
          <q-form>
            <q-input v-model="name" label="Nom" />
            <q-input v-model="email" label="Email" type="email" />
            <q-input v-model="message" label="Message" type="textarea" />
            <q-btn color="primary" label="Envoyer" />
          </q-form>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.about-section,
.projects-section {
  background-color: #1a1a1a;
}

.skills-section,
.contact-section {
  background-color: #2a2a2a;
}
</style>
