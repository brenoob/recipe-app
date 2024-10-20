<template>
  <main>
    <section
      class="bg-[#f3f3f3]"
    >
    <!-- flex flex-col items-center justify-center max-w-xl w-full p-6 bg-white rounded-lg shadow-md -->
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">Master the Kitchen with Ease: Unleash Your Inner Chef Today!</h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">Discover recipes helping you to find the easiest way to cook.</p>
          <button class="bg-dodgeroll-gold px-4 py-2 rounded-md text-lg self-start cursor-pointer hover:bg-dodgeroll-gold/90 active:bg-dodgeroll-gold">Browse Recipes</button>
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            src="/lasanha.jpg"
            sizes="xs:100vw sm:667px"
            densities="x1"
            format="webp"
            alt="Lasanha"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Esta página não requer lógica adicional por enquanto.
</script>

<style scoped>
/* Estilos adicionais podem ser adicionados aqui, se necessário */
</style>
