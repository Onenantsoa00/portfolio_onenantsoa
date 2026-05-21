<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    style="
      background:
        linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.85) 100%),
        url('/images/banner_autre_page.png') center/cover no-repeat;
    "
  >
    <div>
      <div style="font-size: 30vh; font-weight: 700">404</div>

      <div class="text-h2" style="opacity: 0.9">Oops. Nothing here...</div>
      <div class="text-subtitle2 q-mt-md" style="opacity: 0.8">
        Cette page est introuvable, mais le portfolio est toujours là.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Retour à l'accueil"
        no-caps
      />
    </div>
  </div>
</template>
