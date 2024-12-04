<script setup lang="ts">

</script>

<template>
  <main>
    <section>
      <div
        class="container flex flex-col lg:flex-row items-center py-20 gap-10"
      >
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <button
            class="bg-dodgeroll-gold px-4 py-2 rounded-md text-lg self-start cursor-pointer hover:bg-dodgeroll-gold/90 active:bg-dodgeroll-gold"
          >
            Browse Recipes
          </button>
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
    <section class="py-20 container bg-white/50">
      <h2 class="text-3xl lg:text-5xl mb-2">Discover, Create, Share</h2>
      <p class="text-lg lg:text-xl mb-8">Check out our most popular recipes!</p>
      <RecipeCard />
    </section>
  </main>
</template>
