<script setup lang="ts">
const baseUrl = ref<string>(process.env.NODE_ENV === 'production' ? 'https://recipesappnuxt.vercel.app' : 'http://localhost:3000');

useSeoMeta({
  description: 'Explore receitas deliciosas, com ingredientes, tempos de preparo e dicas para se tornar um mestre da culinária!',
  ogTitle: 'Receitas - Seu Guia Completo para a Culinária', // Título para redes sociais (Open Graph)
  ogDescription: 'Descubra uma variedade de receitas saborosas, desde pratos simples até refeições sofisticadas, com todos os detalhes para você cozinhar com facilidade.',
  ogImage: '/lasanha.jpg', // Caminho para a imagem compartilhada nas redes sociais
  ogUrl: baseUrl.value, 
  twitterTitle: 'Receitas - A Melhor Fonte de Inspiração Culinária', // Título para o Twitter
  twitterDescription: 'Encontre receitas incríveis para todas as ocasiões e descubra como preparar pratos saborosos com facilidade.',
  twitterImage: '/lasanha.jpg', // Caminho para a imagem no Twitter
  twitterCard: 'summary_large_image' // Tipo de cartão para Twitter (imagem maior)
});

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

</script>

<template>
  <div class="font-Inter">
    <VitePwaManifest />
    <NuxtLayout/>
    <NuxtPage />
  </div>
</template>
