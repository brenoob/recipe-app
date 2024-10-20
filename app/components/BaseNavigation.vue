<script setup lang="ts"></script>

<template>
  <div>
    <header class="py-4 border-b">
        <nav class="flex container items-center">
            <NuxtLink to="/" class="flex items-center gap-1" href="">
                <NuxtImg width="56px" densities="1x" src="/icon-green.png" alt="logo" format="webp" />
                <span class="text-3xl font-bold">Nuxt recipes</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">about</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
  </div>
</template>
