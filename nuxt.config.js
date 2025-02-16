
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    'primeflex/primeflex.css'
  ],
  build: {
    transpile: ['primevue']
  },
  ssr: false
})
