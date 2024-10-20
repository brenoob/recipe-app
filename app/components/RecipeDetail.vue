<script setup lang="ts">
import type { Recipe } from '~/types/recipeTypes';

const route = useRoute();
const id = route.params.id as string;

const { data: recipe, error, refresh } = await useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`);

const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});

watch(recipe, () => {
  isLoading.value = false;
});

if (error.value) {
  throw createError({
    statusCode: error.value?.statusCode || 500,
    statusMessage: error.value?.statusMessage || 'Failed to fetch recipe',
  });
}
</script>

<template>
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <Icon name="lucide:loader" class="w-12 h-12 animate-spin text-dodgeroll-gold" />
    </div>
  
    <div v-else-if="recipe" class="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-6">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{{ recipe.name }}</h1>
        <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm sm:text-base mb-4">
          <div class="flex items-center gap-2">
            <Icon name="lucide:clock" class="w-5 h-5 text-dodgeroll-gold" />
            <span>{{ recipe.cookTimeMinutes }} min</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:flame" class="w-5 h-5 text-dodgeroll-gold" />
            <span>{{ recipe.caloriesPerServing }} kcal</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:users" class="w-5 h-5 text-dodgeroll-gold" />
            <span>{{ recipe.servings }} servings</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="lucide:star" class="w-5 h-5 text-dodgeroll-gold" />
            <span>{{ recipe.rating }} ({{ recipe.reviewCount }})</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in recipe.tags" :key="tag" class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
            {{ tag }}
          </span>
        </div>
      </header>
  
      <!-- Image -->
      <NuxtImg
        :src="recipe.image"
        :alt="recipe.name"
        class="w-full h-48 sm:h-64 lg:h-96 object-cover rounded-lg shadow-md mb-6"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 1000px"
      />
  
      <!-- Ingredients and Instructions -->
      <div class="space-y-6 lg:flex lg:gap-8 lg:space-y-0">
        <!-- Ingredients -->
        <div class="lg:w-1/3">
          <h2 class="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">Ingredients</h2>
          <ul class="space-y-2">
            <li v-for="ingredient in recipe.ingredients" :key="ingredient" class="flex items-center">
              <label class="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" class="form-checkbox h-4 w-4 text-dodgeroll-gold rounded focus:ring-dodgeroll-gold" />
                <span class="text-sm sm:text-base text-gray-700">{{ ingredient }}</span>
              </label>
            </li>
          </ul>
        </div>
  
        <!-- Instructions -->
        <div class="lg:w-2/3">
          <h2 class="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">Instructions</h2>
          <ol class="space-y-3">
            <li v-for="(instruction, index) in recipe.instructions" :key="index" class="flex">
              <span class="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center bg-dodgeroll-gold text-white rounded-full mr-3 text-sm sm:text-base">
                {{ index + 1 }}
              </span>
              <p class="text-sm sm:text-base text-gray-700">{{ instruction }}</p>
            </li>
          </ol>
        </div>
      </div>
  
      <!-- Additional Information -->
      <div class="mt-6 p-4 sm:p-6 bg-gray-100 rounded-lg">
        <h2 class="text-xl sm:text-2xl font-semibold mb-3 text-gray-900">Additional Information</h2>
        <div class="grid grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
          <div>
            <h3 class="font-medium text-gray-900">Difficulty</h3>
            <p class="text-gray-700">{{ recipe.difficulty }}</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Cuisine</h3>
            <p class="text-gray-700">{{ recipe.cuisine }}</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Prep Time</h3>
            <p class="text-gray-700">{{ recipe.prepTimeMinutes }} min</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900">Cook Time</h3>
            <p class="text-gray-700">{{ recipe.cookTimeMinutes }} min</p>
          </div>
        </div>
      </div>
    </div>
  
    <div v-else-if="error" class="flex justify-center items-center h-screen">
      <p class="text-red-500 text-xl">{{ error.message }}</p>
    </div>
  </template>