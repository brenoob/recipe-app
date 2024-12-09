import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future: {
    compatibilityVersion: 4,
  },

  pages: true,

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    templateUtils: true,
    relativeWatchPaths: true,
    resetAsyncDataToUndefined: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  image: {
    domains: ["cdn.dummyjson.com"],
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "@nuxt/eslint",
  ],

  css: [
    "@/assets/css/global.css", // Use @ para referenciar a raiz do projeto
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Inter: true,
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
    storage: "localStorage",
    storageKey: "nuxt-color-mode",
  },
  pwa: {
    workbox: {
      globDirectory: ".output/public",
      globPatterns: [
        "_nuxt/**/*.js",
        "_nuxt/**/*.css",
        "_nuxt/builds/**/*.json",
        "**/*.html",
      ],
      globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
      navigateFallback: "/",
      additionalManifestEntries: [{ url: "/", revision: null }],
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "start-page",
          },
        },
      ],
    },
    manifest: {
      name: "recipes",
      short_name: "recipes",
      description:
        "Recipes app with delicious recipes for you to explore and enjoy",
      theme_color: "#1e293b",
      background_color: "#1e293b",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "/screenshots/desktop-screenshot.png",
          sizes: "1920x880", // Tamanho para desktop
          type: "image/png",
          form_factor: "wide", // Imagem para desktop
        },
        {
          src: "/screenshots/mobile-screenshot.png",
          sizes: "535x1157", // Tamanho para mobile
          type: "image/png",
          form_factor: "narrow", // Imagem para mobile
        },
      ],
    },
    registerType: "autoUpdate",
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      title: "recipes",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
});
