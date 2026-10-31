<template>
  <q-page class="portfolio">
    <!-- Hero -->
    <section id="home" class="hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <Motion v-bind="intro(0)">
            <p class="hero__status">
              <span class="hero__pulse" aria-hidden="true"></span>
              {{ t('hero.status') }}
            </p>
          </Motion>

          <Motion v-bind="intro(0.08)">
            <h1 class="display hero__name">{{ t('hero.name') }}</h1>
          </Motion>

          <Motion v-bind="intro(0.14)">
            <p class="hero__role">{{ t('hero.role') }}</p>
          </Motion>

          <Motion v-bind="intro(0.2)">
            <p class="lead hero__pitch">{{ t('hero.pitch') }}</p>
          </Motion>

          <Motion v-bind="intro(0.26)">
            <div class="hero__actions">
              <AppButton variant="primary" icon="arrow_downward" @click="scrollTo('projects')">
                {{ t('hero.cta_projects') }}
              </AppButton>
              <AppButton variant="outline" icon="download" href="/cv_onenantsoa.pdf" download>
                {{ t('hero.cta_cv') }}
              </AppButton>
            </div>
          </Motion>
        </div>

        <Motion v-bind="intro(0.22)" class="hero__card-wrap">
          <TiltCard class="hero__card panel">
            <div class="hero__photo">
              <img :src="profileImage" :alt="t('hero.photo_alt')" />
            </div>

            <div class="hero__identity">
              <p class="hero__fullname">{{ t('hero.full_name') }}</p>
              <p class="mono-label">{{ t('hero.role') }}</p>
            </div>

            <dl class="hero__facts">
              <div>
                <dt>{{ t('hero.facts.location') }}</dt>
                <dd>{{ t('hero.facts.location_value') }}</dd>
              </div>
              <div>
                <dt>{{ t('hero.facts.study') }}</dt>
                <dd>{{ t('hero.facts.study_value') }}</dd>
              </div>
              <div>
                <dt>{{ t('hero.facts.stack') }}</dt>
                <dd>{{ t('hero.facts.stack_value') }}</dd>
              </div>
              <div>
                <dt>{{ t('hero.facts.looking') }}</dt>
                <dd>{{ t('hero.facts.looking_value') }}</dd>
              </div>
              <div>
                <dt>{{ t('hero.facts.availability') }}</dt>
                <dd>{{ t('hero.facts.availability_value') }}</dd>
              </div>
            </dl>
          </TiltCard>
        </Motion>
      </div>
    </section>

    <div class="container">
      <TechMarquee :items="techStack" />
    </div>

    <!-- About -->
    <section id="about" class="section">
      <div class="container">
        <SectionHeading :title="t('about.title')" :lead="t('about.lead')" />

        <p class="about__profile">{{ t('about.profile') }}</p>

        <div class="about__grid">
          <div class="about__copy">
            <ScrollReveal>
              <p>{{ t('about.p1') }}</p>
            </ScrollReveal>
            <ScrollReveal :delay="70">
              <p>{{ t('about.p2') }}</p>
            </ScrollReveal>
            <ScrollReveal :delay="120">
              <div class="about__focus panel">
                <p class="mono-label">{{ t('about.focus_title') }}</p>
                <ul class="about__focus-list">
                  <li v-for="item in focusItems" :key="item">
                    <span class="about__tick" aria-hidden="true"></span>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal :delay="60">
            <div class="about__stats panel">
              <StatCounter
                v-for="stat in stats"
                :key="stat.label"
                :value="stat.value"
                :suffix="stat.suffix"
                :label="stat.label"
              />
              <div class="about__schedule">
                <p class="mono-label">{{ t('about.schedule_title') }}</p>
                <p class="about__schedule-text">{{ t('about.schedule_text') }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section skills">
      <div class="container">
        <SectionHeading :title="t('skills.title')" :lead="t('skills.lead')" />

        <div class="skills__grid">
          <ScrollReveal v-for="(group, index) in skillGroups" :key="group.id" :delay="index * 60">
            <TiltCard class="skills__card panel">
              <h3 class="skills__title">{{ group.title }}</h3>
              <div class="skills__list">
                <SkillBar
                  v-for="item in group.items"
                  :key="item.name"
                  :label="item.name"
                  :value="item.level"
                />
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Education and experience -->
    <section id="journey" class="section">
      <div class="container">
        <SectionHeading :title="t('journey.title')" :lead="t('journey.lead')" />

        <div class="journey__grid">
          <ScrollReveal>
            <p class="journey__label mono-label">{{ t('journey.education') }}</p>
            <ol class="timeline">
              <li v-for="(item, index) in education" :key="item.id" class="timeline__item">
                <span class="timeline__index mono-label">{{ pad(index) }}</span>
                <div class="timeline__body">
                  <p v-if="item.period" class="mono-label">{{ item.period }}</p>
                  <h3 class="timeline__title">{{ item.title }}</h3>
                  <p class="timeline__place">{{ item.place }}</p>
                </div>
              </li>
            </ol>
          </ScrollReveal>

          <ScrollReveal :delay="80">
            <p class="journey__label mono-label">{{ t('journey.experience') }}</p>
            <ol class="timeline">
              <li v-for="(item, index) in experience" :key="item.id" class="timeline__item">
                <span class="timeline__index mono-label">{{ pad(index) }}</span>
                <div class="timeline__body">
                  <p v-if="item.period" class="mono-label">{{ item.period }}</p>
                  <h3 class="timeline__title">{{ item.title }}</h3>
                  <p class="timeline__place">{{ item.place }}</p>
                  <p v-if="item.detail" class="timeline__detail">{{ item.detail }}</p>
                  <ul v-if="item.missions.length" class="timeline__missions">
                    <li v-for="mission in item.missions" :key="mission">{{ mission }}</li>
                  </ul>
                </div>
              </li>
            </ol>
          </ScrollReveal>
        </div>

        <div class="certifications">
          <p class="journey__label mono-label">{{ t('journey.certifications') }}</p>
          <TiltCard class="certification panel">
            <div class="certification__head">
              <q-icon name="verified" size="18px" class="certification__icon" aria-hidden="true" />
              <p class="certification__title">{{ t('journey.items.userfeel.title') }}</p>
            </div>
            <p class="certification__place">{{ t('journey.items.userfeel.place') }}</p>
            <a
              class="link-underline certification__link"
              :href="userfeelUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('journey.verify') }}
            </a>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="section">
      <div class="container">
        <SectionHeading :title="t('projects.title')" :lead="t('projects.lead')" />

        <div class="projects__grid">
          <ScrollReveal v-for="(project, index) in projects" :key="project.id" :delay="index * 80">
            <TiltCard class="project panel">
              <ProjectGallery
                :images="project.images"
                :alt="projectName(project)"
                :label="t('projects.gallery_label')"
                :locked="project.locked"
              />
              <div class="project__body">
                <div class="project__head">
                  <p class="mono-label">{{ t(`projects.items.${project.id}.kind`) }}</p>
                  <span v-if="project.badge" class="project__badge mono-label">{{
                    project.badge
                  }}</span>
                </div>
                <h3 class="project__title">{{ projectName(project) }}</h3>
                <p class="project__summary">{{ t(`projects.items.${project.id}.summary`) }}</p>
                <ul class="tech-list">
                  <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
                </ul>
                <a
                  v-if="project.repo"
                  class="link-underline project__link"
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <q-icon name="code" size="16px" aria-hidden="true" />
                  {{ t('projects.code') }}
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Languages -->
    <section id="languages" class="section languages">
      <div class="container languages__inner">
        <SectionHeading :title="t('languages.title')" :lead="t('languages.lead')" />
        <div class="languages__grid">
          <ScrollReveal
            v-for="(language, index) in languages"
            :key="language.id"
            :delay="index * 60"
            class="language__reveal"
          >
            <TiltCard class="language panel">
              <span class="language__flag" aria-hidden="true">{{ language.flag }}</span>
              <div>
                <p class="language__name">{{ language.name }}</p>
                <p class="mono-label">{{ language.note }}</p>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="container">
        <div class="contact panel">
          <div class="contact__intro">
            <SectionHeading :title="t('contact.title')" :lead="t('contact.lead')" />

            <dl class="contact__details">
              <div>
                <dt class="mono-label">{{ t('contact.email_label') }}</dt>
                <dd class="contact__email">
                  <a class="link-underline" :href="`mailto:${emailAddress}`">{{ emailAddress }}</a>
                  <button
                    type="button"
                    class="contact__copy"
                    :aria-label="t('contact.copy_email')"
                    :title="t('contact.copy_email')"
                    @click="copyEmail"
                  >
                    <q-icon name="content_copy" size="15px" aria-hidden="true" />
                  </button>
                </dd>
              </div>
              <div>
                <dt class="mono-label">{{ t('contact.phone_label') }}</dt>
                <dd class="contact__value">
                  <a class="link-underline" :href="`tel:${phoneDigits}`">{{ phoneNumber }}</a>
                </dd>
              </div>

              <div>
                <dt class="mono-label">{{ t('contact.location_label') }}</dt>
                <dd class="contact__value">{{ t('contact.location') }}</dd>
              </div>

              <div>
                <dt class="mono-label">{{ t('contact.socials') }}</dt>
                <dd class="contact__socials">
                  <a
                    class="link-underline"
                    href="https://github.com/Onenantsoa00"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                  >
                  <a
                    class="link-underline"
                    href="https://www.linkedin.com/in/onenantsoa-ranaivo-2366a7379/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >LinkedIn</a
                  >
                  <a
                    class="link-underline"
                    href="https://www.userfeel.com/t/2f747e75"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ t('footer.userfeel') }}</a
                  >
                </dd>
              </div>
            </dl>
          </div>

          <form class="contact__form" @submit.prevent="sendMail">
            <label class="field">
              <span class="field__label">{{ t('contact.form.name') }}</span>
              <input
                v-model="form.name"
                class="field__input"
                type="text"
                name="name"
                autocomplete="name"
                :placeholder="t('contact.form.name_placeholder')"
                required
              />
            </label>

            <label class="field">
              <span class="field__label">{{ t('contact.form.email') }}</span>
              <input
                v-model="form.email"
                class="field__input"
                type="email"
                name="email"
                autocomplete="email"
                :placeholder="t('contact.form.email_placeholder')"
                required
              />
            </label>

            <label class="field field--full">
              <span class="field__label">{{ t('contact.form.message') }}</span>
              <textarea
                v-model="form.message"
                class="field__input field__input--area"
                name="message"
                rows="4"
                :placeholder="t('contact.form.message_placeholder')"
                required
              ></textarea>
            </label>

            <div class="contact__submit">
              <AppButton type="submit" variant="primary" icon="send" :disabled="sending">
                {{ sending ? t('contact.form.sending') : t('contact.form.submit') }}
              </AppButton>
              <p class="mono-label contact__privacy">{{ t('contact.privacy') }}</p>
            </div>

            <p
              v-if="statusMessage"
              class="contact__status"
              :class="`is-${status}`"
              role="status"
              aria-live="polite"
            >
              {{ statusMessage }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <p class="footer__note">{{ t('footer.note') }}</p>
        <p class="mono-label footer__meta">{{ t('footer.built_with') }} — {{ year }}</p>
        <button type="button" class="footer__top" @click="scrollTo('home')">
          <q-icon name="arrow_upward" size="15px" aria-hidden="true" />
          {{ t('ui.back_top') }}
        </button>
      </div>
    </footer>
  </q-page>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { useQuasar } from 'quasar'
import { Motion } from 'motion-v'
import { usePreferredReducedMotion } from '@vueuse/core'
import emailjs from '@emailjs/browser'
import { t } from 'src/i18n'
import { useScrollToSection } from 'src/composables/useScrollToSection'
import AppButton from 'src/components/ui/AppButton.vue'
import TechMarquee from 'src/components/ui/TechMarquee.vue'
import ProjectGallery from 'src/components/ui/ProjectGallery.vue'
import ScrollReveal from 'src/components/ui/ScrollReveal.vue'
import SectionHeading from 'src/components/ui/SectionHeading.vue'
import SkillBar from 'src/components/ui/SkillBar.vue'
import StatCounter from 'src/components/ui/StatCounter.vue'
import TiltCard from 'src/components/ui/TiltCard.vue'

const $q = useQuasar()
const reducedMotion = usePreferredReducedMotion()
const { scrollTo } = useScrollToSection()

const profileImage = '/images/profile.jpeg'
const emailAddress = 'ranaivoonenantsoa@gmail.com'
const phoneNumber = '+261 34 08 654 48'
const phoneDigits = '+261340865448'
const userfeelUrl = 'https://www.userfeel.com/t/2f747e75'
const year = new Date().getFullYear()

const techStack = [
  'Vue.js',
  'Quasar',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'Kotlin',
  'Room',
  'Git',
  'Linux',
  'React Native',
  'HTML / CSS',
]

/** Entrance animation: one orchestrated sequence, skipped for reduced motion. */
const intro = (delay = 0) => {
  if (reducedMotion.value === 'reduce') {
    return {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
      transition: { duration: 0 },
    }
  }

  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  }
}

const focusItems = computed(() => [
  t('about.focus_items.clarity'),
  t('about.focus_items.quality'),
  t('about.focus_items.team'),
])

const stats = computed(() => [
  { value: 3, suffix: '', label: t('about.stats.projects') },
  { value: 10, suffix: '+', label: t('about.stats.stacks') },
  { value: 3, suffix: '', label: t('about.stats.internships') },
  { value: 3, suffix: '', label: t('about.stats.languages') },
])

const skillGroups = computed(() => {
  const groups = [
    {
      id: 'frontend',
      items: [
        { key: 'vue', level: 82 },
        { key: 'quasar', level: 72 },
        { key: 'javascript', level: 80 },
        { key: 'html', level: 90 },
      ],
    },
    {
      id: 'backend',
      items: [
        { key: 'node', level: 78 },
        { key: 'express', level: 72 },
      ],
    },
    {
      id: 'data',
      items: [
        { key: 'postgres', level: 72 },
        { key: 'mongo', level: 62 },
      ],
    },
    {
      id: 'mobile',
      items: [
        { key: 'kotlin', level: 65 },
        { key: 'react_native', level: 60 },
      ],
    },
    {
      id: 'systems',
      items: [
        { key: 'network', level: 68 },
        { key: 'linux', level: 70 },
        { key: 'git', level: 80 },
        { key: 'office', level: 85 },
      ],
    },
  ]

  return groups.map((group) => ({
    id: group.id,
    title: t(`skills.groups.${group.id}.title`),
    items: group.items.map((item) => ({
      name: t(`skills.groups.${group.id}.items.${item.key}`),
      level: item.level,
    })),
  }))
})

const pad = (index) => String(index + 1).padStart(2, '0')

const DETAIL_IDS = ['master', 'nexthope', 'imra']
const MISSION_IDS = ['nexthope', 'imra']

const journeyEntries = (ids) =>
  ids.map((id) => ({
    id,
    period: t(`journey.items.${id}.period`),
    title: t(`journey.items.${id}.title`),
    place: t(`journey.items.${id}.place`),
    detail: DETAIL_IDS.includes(id) ? t(`journey.items.${id}.detail`) : '',
    missions: MISSION_IDS.includes(id) ? t(`missions.${id}`) : [],
  }))

const education = computed(() => journeyEntries(['master', 'licence', 'bac']))
const experience = computed(() => journeyEntries(['tresorerie', 'nexthope', 'imra']))

const projects = [
  {
    id: 'moneywise',
    name: 'MoneyWise',
    tech: ['Kotlin', 'Room', 'Android'],
    repo: 'https://github.com/Onenantsoa00/Money_Wise',
    locked: false,
    images: [
      '/images/projects/gestion_projet_money_wise.jpeg',
      '/images/projects/tableau_de_bord_money_wise.jpeg',
      '/images/projects/menu_money_wise.jpeg',
    ],
  },
  {
    id: 'timesheet',
    name: 'Feuille de Temps',
    tech: ['Vue.js', 'Express', 'PostgreSQL'],
    repo: 'https://github.com/Onenantsoa00/feuille_de_temps',
    locked: false,
    images: [
      '/images/projects/login_feuille_de_temps.png',
      '/images/projects/tableau_de_bord_feuille_de_temps.png',
      '/images/projects/timesheet_feuille_de_temps.png',
    ],
  },
  {
    id: 'docscan',
    nameKey: 'projects.items.docscan.name',
    badge: 'FI.FA.KRI',
    tech: ['Vue.js', 'Node.js'],
    repo: '',
    locked: true,
    images: [],
  },
]

const projectName = (project) => (project.nameKey ? t(project.nameKey) : project.name)

const languages = computed(() => [
  { id: 'mg', flag: '🇲🇬', name: t('languages.items.mg.name'), note: t('languages.items.mg.note') },
  { id: 'fr', flag: '🇫🇷', name: t('languages.items.fr.name'), note: t('languages.items.fr.note') },
  { id: 'en', flag: '🇬🇧', name: t('languages.items.en.name'), note: t('languages.items.en.note') },
])

// Contact: EmailJS when configured, otherwise a prefilled mail draft.
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const isPlaceholder = (value) => !value || /SERVICE_ID|TEMPLATE_ID|PUBLIC_KEY|^your/i.test(value)
const emailjsConfigured =
  !isPlaceholder(serviceId) && !isPlaceholder(templateId) && !isPlaceholder(publicKey)

const form = reactive({ name: '', email: '', message: '' })
const sending = ref(false)
const status = ref('')

const statusMessage = computed(() => {
  if (status.value === 'success') return t('contact.form.success')
  if (status.value === 'error') return t('contact.form.error')
  if (status.value === 'fallback') return t('contact.form.fallback')
  return ''
})

const buildMailto = () => {
  const subject = `${t('contact.title')} — ${form.name}`
  const body = `${form.message}\n\n${form.name}\n${form.email}`
  return `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const sendMail = async () => {
  if (!emailjsConfigured) {
    window.location.href = buildMailto()
    status.value = 'fallback'
    return
  }

  sending.value = true
  status.value = ''

  try {
    await emailjs.send(serviceId, templateId, {
      name: form.name,
      email: form.email,
      message: form.message,
      reply_to: form.email,
    })

    status.value = 'success'
    $q.notify({ type: 'positive', message: t('contact.form.success') })
    resetForm()
  } catch (error) {
    console.error(error)
    status.value = 'error'
    $q.notify({ type: 'negative', message: t('contact.form.error') })
  } finally {
    sending.value = false
  }
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress)
    $q.notify({ type: 'positive', message: t('contact.copied') })
  } catch (error) {
    console.error(error)
    $q.notify({ type: 'negative', message: emailAddress })
  }
}

onMounted(() => {
  if (emailjsConfigured) emailjs.init({ publicKey })
})
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  overflow: hidden;
  padding-top: clamp(92px, 11vw, 140px);
  padding-bottom: clamp(44px, 6vw, 76px);
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
  gap: clamp(32px, 5vw, 68px);
  align-items: center;
}

.hero__copy {
  display: grid;
  justify-items: start;
  gap: 20px;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.79rem;
  color: var(--ink-soft);
}

.hero__pulse {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 var(--accent-wash);
  animation: pulse 2.6s ease-out infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--accent-wash);
  }
  70% {
    box-shadow: 0 0 0 9px transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.hero__name {
  max-width: 14ch;
}

.hero__role {
  font-size: clamp(0.98rem, 1.5vw, 1.16rem);
  color: var(--accent);
  font-weight: 500;
}

.hero__pitch {
  max-width: 48ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 6px;
}

.hero__card {
  display: grid;
  gap: 16px;
  padding: 18px;
  box-shadow: var(--shadow-card);
}

.hero__photo {
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  background: var(--surface-soft);
}

.hero__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 22%;
  display: block;
}

.hero__identity {
  display: grid;
  gap: 2px;
}

.hero__fullname {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.hero__facts {
  display: grid;
  margin: 0;
}

.hero__facts div {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  gap: 12px;
  padding: 9px 0;
  border-top: 1px solid var(--line);
}

.hero__facts dt {
  font-family: var(--font-mono);
  font-size: 0.67rem;
  color: var(--muted);
}

.hero__facts dd {
  margin: 0;
  font-size: 0.83rem;
  line-height: 1.5;
  color: var(--ink-soft);
}

/* About */
.about__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: start;
}

.about__copy {
  display: grid;
  gap: 16px;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.about__focus {
  display: grid;
  gap: 12px;
  padding: 20px;
  margin-top: 6px;
}

.about__focus-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 0.92rem;
}

.about__focus-list li {
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 10px;
  align-items: start;
}

.about__tick {
  width: 6px;
  height: 6px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--accent);
}

.about__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 26px 18px;
  padding: clamp(20px, 3vw, 28px);
  position: sticky;
  top: 96px;
}

.about__profile {
  margin: -18px 0 clamp(26px, 4vw, 40px);
  padding-left: 14px;
  border-left: 2px solid var(--accent);
  font-size: 1.02rem;
  color: var(--ink-soft);
  max-width: 54ch;
}

.about__schedule {
  grid-column: 1 / -1;
  display: grid;
  gap: 6px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.about__schedule-text {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--ink-soft);
}

.hero__card-wrap {
  min-width: 0;
}

.timeline__missions {
  display: grid;
  gap: 3px;
  margin: 8px 0 0;
  padding-left: 16px;
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--muted);
}

.timeline__missions li::marker {
  color: var(--accent);
}

/* Skills */
.skills {
  border-top: 1px solid var(--line);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(228px, 1fr));
  gap: 14px;
}

.skills__card {
  display: grid;
  gap: 18px;
  padding: 22px;
  height: 100%;
}

.skills__title {
  font-size: 0.98rem;
  letter-spacing: -0.01em;
}

.skills__list {
  display: grid;
  gap: 14px;
}

/* Journey */
.journey__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
}

.journey__label {
  margin-bottom: 18px;
}

.timeline {
  display: grid;
  gap: 26px;
  margin: 0;
  padding: 0 0 0 22px;
  list-style: none;
  border-left: 1px solid var(--line);
}

.timeline__item {
  position: relative;
  display: grid;
  grid-template-columns: 30px 1fr;
  gap: 12px;
}

.timeline__item::before {
  content: '';
  position: absolute;
  left: -26px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--accent);
}

.timeline__item:first-child::before {
  background: var(--accent);
}

.timeline__index {
  font-size: 0.7rem;
  padding-top: 2px;
}

.timeline__title {
  font-size: 1rem;
  margin: 4px 0 2px;
}

.timeline__place {
  font-size: 0.88rem;
  color: var(--muted);
}

.timeline__detail {
  margin-top: 6px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--ink-soft);
}

/* Projects */
.projects__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.project {
  display: grid;
  gap: 16px;
  padding: 14px;
  height: 100%;
}

.project__body {
  display: grid;
  gap: 10px;
  padding: 0 6px 6px;
  align-content: start;
}

.project__title {
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.project__summary {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--ink-soft);
}

.project__link {
  justify-self: start;
  margin-top: 4px;
  font-size: 0.88rem;
}

/* Languages */
.languages {
  border-top: 1px solid var(--line);
}

.languages__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: clamp(24px, 4vw, 64px);
  align-items: center;
}

.languages__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.language {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  height: 100%;
}

.language__flag {
  font-size: 1.35rem;
  line-height: 1;
}

.language__name {
  font-size: 0.96rem;
  font-weight: 500;
}

/* Contact */
.contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 60px);
  padding: clamp(24px, 4vw, 48px);
  box-shadow: var(--shadow-card);
}

.contact__intro :deep(.section-heading) {
  margin-bottom: 26px;
}

.contact__details {
  display: grid;
  gap: 18px;
  margin: 0;
}

.contact__details dt {
  margin-bottom: 4px;
}

.contact__details dd {
  margin: 0;
  font-size: 0.92rem;
  color: var(--ink-soft);
}

.contact__email {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.contact__copy {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
  color: var(--muted);
  cursor: pointer;
  transition:
    color 180ms ease,
    border-color 180ms ease;
}

.contact__copy:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.contact__socials {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  font-size: 0.88rem;
}

.contact__form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  align-content: start;
}

.field {
  display: grid;
  gap: 6px;
}

.field--full {
  grid-column: 1 / -1;
}

.field__label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
}

.field__input {
  width: 100%;
  padding: 11px 13px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--ground);
  color: var(--ink);
  font-family: inherit;
  font-size: 0.92rem;
  transition:
    border-color 180ms ease,
    background-color 180ms ease;
}

.field__input::placeholder {
  color: var(--muted);
  opacity: 0.75;
}

.field__input:focus {
  border-color: var(--accent);
  background: var(--surface);
  outline: none;
}

.field__input--area {
  resize: vertical;
  min-height: 108px;
}

.contact__submit {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.contact__privacy {
  font-size: 0.66rem;
}

.contact__status {
  grid-column: 1 / -1;
  font-size: 0.85rem;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--line);
}

.contact__status.is-success {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-wash);
}

.contact__status.is-error {
  border-color: #d64545;
  color: #d64545;
}

.contact__status.is-fallback {
  color: var(--ink-soft);
}

.project__head {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.project__badge {
  padding: 2px 8px;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  color: var(--accent);
}

.certifications {
  margin-top: clamp(30px, 4vw, 46px);
}

.certification {
  display: grid;
  gap: 8px;
  justify-items: start;
  max-width: 420px;
  padding: 20px;
}

.certification__head {
  display: flex;
  align-items: center;
  gap: 9px;
}

.certification__icon {
  color: var(--accent);
}

.certification__title {
  font-size: 0.95rem;
  font-weight: 600;
}

.certification__place {
  font-size: 0.85rem;
  color: var(--muted);
}

.certification__link {
  font-size: 0.85rem;
}

/* Footer */
.footer {
  border-top: 1px solid var(--line);
  padding-block: 24px;
}

.footer__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footer__note {
  font-size: 0.86rem;
  color: var(--ink-soft);
}

.footer__top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  border: 0;
  background: none;
  color: var(--muted);
  font-family: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 180ms ease;
}

.footer__top:hover {
  color: var(--accent);
}

@media (max-width: 960px) {
  .hero__inner,
  .about__grid,
  .languages__inner,
  .journey__grid,
  .contact,
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .about__stats {
    position: static;
  }

  .hero__name {
    max-width: none;
  }
}

@media (max-width: 620px) {
  .contact__form {
    grid-template-columns: 1fr;
  }

  .about__stats {
    grid-template-columns: 1fr 1fr;
  }

  .hero__facts div {
    grid-template-columns: 84px minmax(0, 1fr);
  }
}
</style>
