<template>
  <div class="preview">
    <!-- Locked: the visuals must not be published (copyright). -->
    <template v-if="locked">
      <div class="preview__stage" role="img" :aria-label="`${alt} — ${t('preview.title')}`">
        <span class="preview__grid" aria-hidden="true"></span>
        <q-icon name="lock" size="20px" class="preview__icon" aria-hidden="true" />
        <p class="preview__title">{{ t('preview.title') }}</p>
        <p class="preview__note">{{ t('preview.note') }}</p>
      </div>

      <div v-if="images.length" class="preview__thumbs" :aria-label="label">
        <span
          v-for="(image, position) in images"
          :key="image"
          class="preview__thumb"
          :title="t('preview.label')"
        >
          <q-icon name="image_not_supported" size="15px" aria-hidden="true" />
          <span class="preview__thumb-index">{{ position + 1 }}</span>
        </span>
        <span class="preview__count mono-label">{{ images.length }} {{ t('preview.count') }}</span>
      </div>
    </template>

    <!-- Published screenshots, with a thumbnail switcher. -->
    <template v-else>
      <div class="preview__stage preview__stage--image">
        <Transition name="screen" mode="out-in">
          <img
            :key="images[active]"
            :src="images[active]"
            :alt="`${alt} — ${active + 1}/${images.length}`"
            loading="lazy"
            class="preview__image"
          />
        </Transition>
      </div>

      <div class="preview__thumbs" role="group" :aria-label="label">
        <button
          v-for="(image, position) in images"
          :key="image"
          type="button"
          class="preview__thumb preview__thumb--button"
          :class="{ 'is-active': position === active }"
          :aria-label="`${alt} ${position + 1}`"
          :aria-pressed="position === active"
          @click="active = position"
        >
          <img :src="image" alt="" loading="lazy" />
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { t } from 'src/i18n'

defineProps({
  images: { type: Array, required: true },
  alt: { type: String, default: '' },
  label: { type: String, default: '' },
  locked: { type: Boolean, default: false },
})

const active = ref(0)
</script>

<style scoped>
.preview {
  display: grid;
  gap: 10px;
}

.preview__stage {
  position: relative;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 6px;
  aspect-ratio: 16 / 10;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  text-align: center;
  background:
    radial-gradient(ellipse 70% 60% at 50% 0%, var(--accent-wash), transparent 72%),
    var(--surface-soft);
}

.preview__stage--image {
  display: block;
  padding: 0;
  background: var(--surface-soft);
}

.preview__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 26px 26px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 78%);
  opacity: 0.7;
}

.preview__icon {
  position: relative;
  color: var(--accent);
}

.preview__title {
  position: relative;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
}

.preview__note {
  position: relative;
  max-width: 34ch;
  font-size: 0.78rem;
  line-height: 1.5;
  color: var(--muted);
}

.preview__thumbs {
  display: flex;
  align-items: center;
  gap: 6px;
}

.preview__thumb {
  position: relative;
  display: grid;
  place-items: center;
  width: 42px;
  height: 34px;
  border: 1px dashed var(--line-strong);
  border-radius: 8px;
  color: var(--muted);
  background: var(--surface);
}

.preview__thumb--button {
  width: 62px;
  height: 44px;
  padding: 0;
  border: 1px solid var(--line);
  border-style: solid;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity 200ms ease,
    border-color 200ms ease;
}

.preview__thumb--button img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview__thumb--button:hover {
  opacity: 0.9;
}

.preview__thumb--button.is-active {
  opacity: 1;
  border-color: var(--accent);
}

.preview__thumb-index {
  position: absolute;
  right: 3px;
  bottom: 1px;
  font-family: var(--font-mono);
  font-size: 0.55rem;
  color: var(--muted);
}

.preview__count {
  margin-left: auto;
  font-size: 0.64rem;
}

.screen-enter-active,
.screen-leave-active {
  transition:
    opacity 240ms ease,
    transform 240ms ease;
}

.screen-enter-from {
  opacity: 0;
  transform: scale(1.02);
}

.screen-leave-to {
  opacity: 0;
}
</style>
