<script setup lang="ts">
import type { RecipeResponse } from '~/types/recipeTypes';

const { data, error } = await useFetch<RecipeResponse>(
  "https://dummyjson.com/recipes?limit=12"
)
</script>

<template>
  <div v-if="!error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32 gap-y-16">
    <div v-for="recipe in data?.recipes" :key="recipe.id" class="flex flex-col shadow rounded-md bg-white overflow-hidden">
      <NuxtImg
        :src="recipe.image"
        :alt="`Image of ${recipe.name}`"
        sizes="xs:100vw sm:50vw lg:400px"
        format="webp"
        densities="x1"
        class="w-full h-48 object-cover rounded-t-md"
      />
      <div class="flex flex-col p-6 flex-1">
        <h2 class="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">{{ recipe.name }}</h2>
        <div class="flex items-center mb-4">
          <Icon
            v-for="i in 5"
            :key="i"
            name="lucide:star"
            :class="i <= recipe.rating ? 'text-yellow-400' : 'text-gray-300'"
            class="w-5 h-5"
          />
          <span class="ml-2 text-sm text-gray-600">({{ recipe.reviewCount }} reviews)</span>
        </div>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in recipe.tags"
            :key="tag"
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
          >
            {{ tag }}
          </span>
        </div>
        <div class="font-normal w-full bg-white/80 flex gap-8 text-lg mb-4 mt-auto">
          <div class="flex items-center gap-1">
            <Icon name="lucide:clock" class="w-5 h-5" style="color: #f79f1a" />
            <span>{{ recipe.cookTimeMinutes }}m</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="lucide:flame" class="w-5 h-5" style="color: #f79f1a" />
            <span>{{ recipe.caloriesPerServing }}</span>
          </div>
          <div class="flex items-center gap-1">
            <Icon name="lucide:users" class="w-5 h-5" style="color: #f79f1a" />
            <span>{{ recipe.servings }}</span>
          </div>
        </div>
        <div class="mb-4">
          <h3 class="font-semibold text-gray-800 mb-2">Ingredients:</h3>
          <ul class="list-disc list-inside">
            <li v-for="ingredient in recipe.ingredients.slice(0, 3)" :key="ingredient" class="text-gray-600">
              {{ ingredient }}
            </li>
            <li v-if="recipe.ingredients.length > 3" class="text-gray-600">...</li>
          </ul>
        </div>
        <div class="flex justify-between text-sm bg-slate-500/10 text-gray-600 p-2 rounded-md mb-4">
          <div class="flex items-center gap-1">
            <Icon name="lucide:gauge" class="inline w-4 h-4 mr-1" style="color: #f79f1a" />
            {{ recipe.difficulty }}
          </div>
          <div class="flex items-center gap-1">
            <Icon name="lucide:globe" class="inline w-4 h-4 mr-1" style="color: #f79f1a" />
            {{ recipe.cuisine }}
          </div>
        </div>
        <NuxtLink
          :to="`/recipes/${recipe.id}`"
          class="px-4 py-2 text-white self-start bg-yellow-500 rounded-md text-base lg:text-lg cursor-pointer hover:bg-yellow-600 transition-colors"
        >
          View Recipe
        </NuxtLink>
      </div>
    </div>
  </div>
  <div v-else class="text-red-500">
    Error loading recipes: {{ error }}
  </div>
</template>