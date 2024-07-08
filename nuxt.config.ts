// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: [
    '@/assets/styles/main.css',
  ],

  modules: ['nuxt-gtag', '@nuxt/image', "@nuxtjs/sitemap", "@nuxtjs/turnstile"],

  image: {
    provider: 'contentful',
  },

  site: {
    url: 'https://www.clearviewresearch.co.uk/',
  },

  gtag: {
    id: import.meta.env.GOOGLE_ANALYTICS_ID,
    initCommands: [
      ['consent', 'default', {
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        ad_storage: 'denied',
        analytics_storage: 'denied',
        wait_for_update: 500,
      }]
    ]
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      theSpaceId: import.meta.env.YOUR_SPACE_ID,
      theAccessToken: import.meta.env.CONTENT_DELIVERY_API_ACCESS_TOKEN,
    },
    turnstile: {
      secretKey: import.meta.env.TURNSTILE_SECRET_KEY,
    },
  },

  compatibilityDate: '2024-07-07'
})