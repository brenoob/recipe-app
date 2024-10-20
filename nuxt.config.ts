// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    templateUtils: true,
    relativeWatchPaths: true,
    resetAsyncDataToUndefined: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  // vite: {
  //   server: {
  //     hmr: {
  //       overlay: false
  //     }
  //   }
  // },

  image: {
    domains: ['https://cdn.dummyjson.com']
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  css: [
    '@/assets/css/global.css' // Use @ para referenciar a raiz do projeto
  ],

  googleFonts: {
    families: {
      'Inter': true
    }
  }
})