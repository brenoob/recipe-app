<script setup lang="ts">
const isMenuOpen = ref(false); // Estado para controlar a abertura do menu

const closeMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

useSeoMeta({
  title: 'Receitas - Home', // T tulo da p gina
  description: 'Explore uma variedade de deliciosas receitas na plataforma Receitas.', // Descri o
  ogTitle: 'Receitas - Home', // Open Graph Title
  ogDescription: 'Navegue pelas receitas com ingredientes, tempos de cozimento e avalia es.', // Open Graph Description
  ogImage: '/favicon.svg', // Imagem para Open Graph (opcional)
  twitterCard: 'summary_large_image', // Tipo de cart o do Twitter (pode ser 'summary', 'summary_large_image', etc.)
  twitterImage: '/favicon.svg', // Imagem para o Twitter (opcional)
});
</script>

<template>
  <div>
    <header class="fixed top-0 left-0 right-0 py-4 border-b bg-white z-50">
      <nav class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-1">
          <NuxtImg class="rounded-full" width="56" densities="1x" src="/favicon.svg" alt="logo" format="svg" />
          <span class="text-2xl sm:text-3xl font-bold">recipes</span>
        </NuxtLink>

        <!-- Botão hamburguer -->
        <button
          class="sm:hidden p-2 text-gray-600"
          aria-label="Toggle menu"
          @click="closeMenu"
        >
          <Icon name="ri-menu-3-line" style="color: #f79f1a; font-size: 1.5rem" />
        </button>

        <!-- Menu de navegação -->
        <ul
          :class="[
            'sm:flex sm:flex-row sm:gap-6 sm:items-center text-lg sm:text-xl font-bold capitalize',
            isMenuOpen ? 'absolute w-full h-screen left-0 top-full bg-white flex flex-col items-center gap-4 mt-2 py-4 z-40 hover:text-gray-600' : 'hidden sm:flex'
          ]"
        >
          <li>
            <NuxtLink to="/" @click="isMenuOpen = false">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" @click="isMenuOpen = false">About</NuxtLink>
          </li>
          <ColorMode class="ml-auto mr-4 sm:ml-0 sm:mr-0" />
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
/* Adicione transições suaves para a abertura/fechamento do menu */
ul {
  transition: all 0.3s ease-in-out;
}
</style>
