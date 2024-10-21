<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="p-6 sm:p-8">
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
          <Icon name="lucide:alert-triangle" class="w-8 h-8 text-red-500" />
        </div>
        <h1 class="text-3xl sm:text-4xl font-bold text-center mb-2 text-gray-900">
          Error {{ error?.statusCode }}
        </h1>
        <p class="text-gray-600 text-center mb-6">
          {{ error?.statusMessage || "An unexpected error occurred" }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/"
            class="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#f79f1a] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors duration-200"
          >
            <Icon name="lucide:home" class="w-5 h-5 mr-2" />
            Go back Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>