// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: { options: { strict: true } },
  routeRules: {
    //"/*": { swr: 3600 },
    "/**": { swr: false, cache: false },
    "/api/**": { swr: false, cache: false },
    "/api/matches": { swr: false, cache: false },
  },
  modules: [
    'nuxt-icon',
    '@nuxthq/ui',
    '@nuxtjs/tailwindcss',
    'dayjs-nuxt'
  ],
  tailwindcss: {
    configPath: '@/tailwind.config.ts',
  },
  nitro: {
    plugins: ['~/server/index.ts'],
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
})
