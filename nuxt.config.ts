export default defineNuxtConfig({
  typescript: { strict: true },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-07-08',
  vite: {
    server: {
      watch: {
        ignored: ['**/.devenv/**', '**/.direnv/**'],
      },
    },
  },
})
