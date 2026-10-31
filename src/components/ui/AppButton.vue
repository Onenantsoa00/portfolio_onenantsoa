<template>
  <component
    :is="href ? 'a' : 'button'"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
    :href="href || undefined"
    :type="href ? undefined : type"
    :target="target || undefined"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :download="download || undefined"
  >
    <q-icon v-if="icon" :name="icon" size="17px" aria-hidden="true" />
    <span class="btn__label"><slot /></span>
    <q-icon v-if="trailingIcon" :name="trailingIcon" size="17px" aria-hidden="true" />
  </component>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  href: { type: String, default: '' },
  target: { type: String, default: '' },
  download: { type: [Boolean, String], default: false },
  icon: { type: String, default: '' },
  trailingIcon: { type: String, default: '' },
  type: { type: String, default: 'button' },
})
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 999px;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 220ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 220ms ease,
    border-color 220ms ease,
    color 220ms ease,
    box-shadow 220ms ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn--sm {
  padding: 9px 16px;
  font-size: 0.84rem;
}

.btn--md {
  padding: 13px 22px;
}

.btn--primary {
  background: var(--accent);
  color: var(--accent-ink);
  box-shadow: 0 12px 28px -16px var(--accent);
}

.btn--primary:hover {
  background: color-mix(in srgb, var(--accent) 88%, var(--ink));
}

.btn--outline {
  background: transparent;
  border-color: var(--line-strong);
  color: var(--ink);
}

.btn--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn--ghost {
  background: transparent;
  color: var(--ink);
  padding-inline: 4px;
}

.btn--ghost:hover {
  color: var(--accent);
}
</style>
