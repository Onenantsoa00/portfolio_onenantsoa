<template>
  <q-page class="bg-dark text-white">
    <!-- Hero Section -->
    <section
      id="hero"
      class="hero-section flex flex-center column text-center q-pa-xl"
      style="
        min-height: 100vh;
        background:
          linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%),
          url('/images/banner.png');
        background-size: cover;
        background-position: center;
      "
    >
      <div data-aos="fade-up" class="flex column items-center">
        <img
          src="/images/profile.jpeg"
          alt="Ranaivo Andry Ny Avo Onenantsoa"
          class="q-mb-lg"
          style="
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid white;
            object-fit: cover;
          "
        />
        <h1 class="text-h2 q-mb-md">Ranaivo Andry Ny Avo Onenantsoa</h1>
        <p class="text-h5 q-mb-lg">Développeur Full Stack Junior spécialisé en Vue.js et Node.js</p>
        <div class="q-gutter-md">
          <q-btn color="primary" label="Voir mes projets" @click="scrollToSection('projects')" />
          <q-btn color="secondary" label="Télécharger CV" href="/cv_onenantsoa.pdf" download />
          <q-btn color="accent" label="Contact" @click="scrollToSection('contact')" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="about-section page-banner-section q-pa-xl"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center items-center">
        <div class="col-12 col-md-8 text-center">
          <h2 class="text-h3 q-mb-lg text-center">À propos de moi</h2>
          <div class="row items-center q-gutter-lg justify-center">
            <div class="col-12 col-md-4 text-center">
              <img
                src="/images/profile.jpeg"
                alt="Ntsoa Ranaivo"
                style="
                  width: 100%;
                  max-width: 250px;
                  border-radius: 15px;
                  object-fit: cover;
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                "
              />
            </div>
            <div class="col-12 col-md-8 text-center">
              <p class="text-body1">
                Développeur Full Stack Junior passionné par le développement web et mobile. En
                Master à l'Université Adventiste Zurcher, je développe des applications innovantes
                avec Vue.js, Node.js, Kotlin et PostgreSQL.
              </p>
              <p class="text-body2 q-mt-md text-italic">
                🎯 <strong>Profil :</strong> Dynamique, persévérant et déterminé. Aime travailler en
                équipe.
              </p>
              <p class="text-body2 q-mt-md">
                💡 <strong>Objectif :</strong> Créer des solutions innovantes et utiles pour
                résoudre des problèmes réels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      id="skills"
      class="skills-section page-banner-section q-pa-xl bg-grey-9"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <h2 class="text-h3 q-mb-lg text-center">Compétences</h2>
          <div class="row q-gutter-md justify-center">
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md text-center">Frontend</div>
                  <div class="q-mb-sm">
                    <div>Vue.js</div>
                    <q-linear-progress :value="0.8" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Quasar</div>
                    <q-linear-progress :value="0.7" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>React Native</div>
                    <q-linear-progress :value="0.6" color="primary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>HTML/CSS</div>
                    <q-linear-progress :value="0.9" color="primary" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md text-center">Backend</div>
                  <div class="q-mb-sm">
                    <div>Node.js</div>
                    <q-linear-progress :value="0.8" color="secondary" />
                  </div>
                  <div class="q-mb-sm">
                    <div>Express</div>
                    <q-linear-progress :value="0.7" color="secondary" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md text-center">Base de données</div>
                  <div class="q-mb-sm">
                    <div>PostgreSQL</div>
                    <q-linear-progress :value="0.7" color="accent" />
                  </div>
                  <div class="q-mb-sm">
                    <div>MongoDB</div>
                    <q-linear-progress :value="0.6" color="accent" />
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-4">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md text-center">Outils</div>
                  <div class="q-mb-sm">
                    <div>Git</div>
                    <q-linear-progress :value="0.8" color="positive" />
                  </div>
                  <div class="q-mb-sm">
                    <div>GitHub</div>
                    <q-linear-progress :value="0.8" color="positive" />
                  </div>

                  <div class="q-mb-sm">
                    <div>Linux Ubuntu</div>
                    <q-linear-progress :value="0.7" color="positive" />
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
      class="experience-section page-banner-section q-pa-xl"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">Expérience / Formation</h2>
          <div class="row q-gutter-lg justify-center items-center">
            <div class="col-12 col-md-6 text-center">
              <q-timeline color="primary">
                <q-timeline-entry
                  title="Master en Informatique"
                  subtitle="UNIVERSITÉ ADVENTISTE ZURCHER"
                  caption="2026 - Aujourd'hui"
                />
                <q-timeline-entry
                  title="Licence en Informatique"
                  subtitle="UNIVERSITÉ ADVENTISTE ZURCHER"
                  caption="2023 - 2025"
                />
                <q-timeline-entry
                  title="Baccalauréat Série D"
                  subtitle="COLLEGE SAINT MICHEL ITAOSY"
                  caption="2020 - 2022"
                />
              </q-timeline>
            </div>
            <div class="col-12 col-md-6 text-center">
              <div class="text-h6 q-mb-md">🏢 Expériences Professionnelles</div>
              <q-timeline color="secondary">
                <q-timeline-entry
                  title="Stage de Développement"
                  subtitle="NEXTHOPE - Développement d'un application qui charge le recrutement avec ODOO"
                  caption="Juillet - Septembre 2024"
                />
                <q-timeline-entry
                  title="Stage d'Observation"
                  subtitle="IMRA - Observation au niveau du réseau de l'entreprise"
                  caption="04 - 29 Septembre 2023"
                />
              </q-timeline>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section
      id="languages"
      class="languages-section page-banner-section q-pa-xl bg-grey-9"
      style="min-height: auto"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">Langues</h2>
          <div class="row q-gutter-md justify-center">
            <div class="col-12 col-md-6 text-center">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">🇲🇬 Malagasy</div>
                  <q-linear-progress :value="1" color="positive" size="15px" />
                  <p class="text-caption q-mt-sm">Langue maternelle</p>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-6 text-center">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">🇫🇷 Français</div>
                  <q-linear-progress :value="0.95" color="positive" size="15px" />
                  <p class="text-caption q-mt-sm">Deuxième langue</p>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-12 col-md-6 text-center">
              <q-card class="bg-grey-8">
                <q-card-section>
                  <div class="text-h6 q-mb-md">🇬🇧 Anglais</div>
                  <q-linear-progress :value="0.65" color="positive" size="15px" />
                  <p class="text-caption q-mt-sm">Niveau intermédiaire</p>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="projects"
      class="projects-section page-banner-section q-pa-xl"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-10">
          <h2 class="text-h3 q-mb-lg text-center">Projets</h2>
          <div class="row q-gutter-lg justify-center">
            <div class="col-12 col-md-6">
              <q-card class="bg-grey-8">
                <img
                  src="/images/projects/gestion_projet_money_wise.jpeg"
                  alt="MoneyWise"
                  style="width: 100%; height: 200px; object-fit: cover"
                />
                <q-card-section>
                  <div class="text-h6 text-center">MoneyWise</div>
                  <p>
                    Application de gestion financière personnelle est une application android
                    développée avec Kotlin et Room.
                  </p>
                  <p class="text-caption">Technologies: Kotlin, Room</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn
                    flat
                    label="GitHub"
                    href="https://github.com/Onenantsoa00/Money_Wise"
                    target="_blank"
                  />
                  <q-btn flat label="Site" />
                </q-card-actions>
              </q-card>
            </div>
            <div class="col-12 col-md-6">
              <q-card class="bg-grey-8">
                <img
                  src="/images/projects/tableau_de_bord_feuille_de_temps.png"
                  alt="Feuille de Temps"
                  style="width: 100%; height: 200px; object-fit: cover"
                />
                <q-card-section>
                  <div class="text-h6 text-center">Feuille de Temps</div>
                  <p>Application web de suivi du temps de travail avec interface intuitive.</p>
                  <p class="text-caption">Technologies: Vue.js, Express, PostgreSQL</p>
                </q-card-section>
                <q-card-actions>
                  <q-btn
                    flat
                    label="GitHub"
                    href="https://github.com/Onenantsoa00/feuille_de_temps"
                    target="_blank"
                  />
                  <q-btn flat label="Site" />
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
      class="contact-section page-banner-section q-pa-xl bg-grey-9"
      style="min-height: 100vh"
      data-aos="fade-up"
    >
      <div class="row justify-center">
        <div class="col-12 col-md-8">
          <h2 class="text-h3 q-mb-lg text-center">Contact</h2>
          <div class="text-center q-mb-lg">
            <q-icon name="location_on" size="lg" class="q-mr-md" />
            <p><strong>Antananarivo, Madagascar</strong></p>

            <q-separator class="q-my-md" />
            <p>
              <q-icon name="fab fa-github" /> GitHub:
              <a href="https://github.com/Onenantsoa00" target="_blank">github.com/Onenantsoa00</a>
            </p>
            <p>
              <q-icon name="fab fa-linkedin" /> LinkedIn:
              <a href="https://www.linkedin.com/in/onenantsoa-ranaivo-2366a7379/" target="_blank"
                >Onenantsoa Ranaivo</a
              >
            </p>
          </div>
          <div v-if="sentMessage" class="q-mb-md">
            <div class="q-pa-sm bg-positive text-white text-center rounded">{{ sentMessage }}</div>
          </div>
          <q-form @submit.prevent="sendMail">
            <q-input v-model="name" label="Nom" />
            <q-input v-model="email" label="Email" type="email" />
            <q-input v-model="message" label="Message" type="textarea" />
            <q-btn type="submit" color="primary" label="Envoyer" />
          </q-form>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import emailjs from '@emailjs/browser'

// Read EmailJS config from Vite env (create .env with VITE_ variables)
const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'SERVICE_ID'
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'TEMPLATE_ID'
const EMAILJS_PUBLIC = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'PUBLIC_KEY'

// initialize EmailJS with public key (if provided)
emailjs.init(EMAILJS_PUBLIC)

const isValidKey = (v) =>
  !!v &&
  !v.includes('SERVICE_ID') &&
  !v.includes('TEMPLATE_ID') &&
  !v.includes('PUBLIC_KEY') &&
  !v.startsWith('your')
const EMAILJS_CONFIGURED =
  isValidKey(EMAILJS_SERVICE) && isValidKey(EMAILJS_TEMPLATE) && isValidKey(EMAILJS_PUBLIC)

onMounted(() => {
  if (!EMAILJS_CONFIGURED) {
    $q.notify({
      type: 'warning',
      message:
        "EmailJS non configuré. Complétez .env (VITE_EMAILJS_...) pour activer l'envoi direct. Le fallback mailto sera utilisé.",
    })
  }
})

const $q = useQuasar()

const name = ref('')
const email = ref('')
const message = ref('')
const sentMessage = ref('')

const sendMail = async () => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )

    $q.notify({
      type: 'positive',
      message: 'Message envoyé avec succès !',
    })

    name.value = ''
    email.value = ''
    message.value = ''
    sentMessage.value = 'Message envoyé avec succès !'
    setTimeout(() => (sentMessage.value = ''), 4000)
  } catch (error) {
    console.error(error)

    $q.notify({
      type: 'negative',
      message: "Erreur lors de l'envoi du message.",
    })
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  background-attachment: fixed;
  position: relative;
}

.hero-section::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.hero-section > div {
  position: relative;
  z-index: 1;
}

.about-section,
.projects-section {
  background-color: #1a1a1a;
}

.skills-section,
.languages-section,
.contact-section {
  background-color: #2a2a2a;
}

.page-banner-section {
  background:
    linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)),
    url('/images/banner_autre_page.png') center/cover no-repeat;
  background-attachment: fixed;
  position: relative;
}

.page-banner-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.75);
}

.page-banner-section > .row {
  position: relative;
  z-index: 1;
}

q-card {
  transition: all 0.3s ease;
}

q-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
}

img {
  max-width: 100%;
  height: auto;
}
</style>
