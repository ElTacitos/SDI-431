import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  publicRuntimeConfig: {
    strapiApiUrl: process.env.STRAPI_API_URL,
    strapiToken: process.env.STRAPI_TOKEN
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
