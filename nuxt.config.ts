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
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],

  css: [
    '@/assets/css/global.css' // Use @ para referenciar a raiz do projeto
  ],

  googleFonts: {
    families: {
      'Inter': true
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  }
})