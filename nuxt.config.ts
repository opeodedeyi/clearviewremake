// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.css',
  ],

  modules: [
    'nuxt-gtag',
    '@nuxt/image',
  ],

  image: {
    provider: 'contentful',

  },

  gtag: {
    id: 'G-XXXXXXXXXX'
  },
  
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      theSpaceId: import.meta.env.YOUR_SPACE_ID,
      theAccessToken: import.meta.env.CONTENT_DELIVERY_API_ACCESS_TOKEN,
      // googleAnalytics: {
      //   id: import.meta.env.GOOGLE_ANALYTICS_ID
      // }
    }
  }
})
