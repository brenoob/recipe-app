<template>
  <ClientOnly>
    <button
      class="flex justify-center border border-gray-300 p-1 rounded-full"
      :class="{
        'bg-slate-700': colorMode.value === 'dark',
        'bg-dodgeroll-gold': colorMode.value === 'light',
      }"
      aria-hidden="true"
      @click="toggleColorMode"
    >
      <Icon
        v-if="colorMode.value === 'dark'"
        name="ri-moon-line"
        class="w-6 h-6 text-slate-300 animate-transition"
      />
      <Icon
        v-else
        name="ri-sun-line"
        class="w-6 h-6 text-text animate-transition"
      />
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

onMounted(() => {
  const storedMode = localStorage.getItem("colorMode");
  colorMode.value = storedMode || "light";
  if (!storedMode) {
    localStorage.setItem("colorMode", "light");
  }
});

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  localStorage.setItem("colorMode", colorMode.value);
};
</script>

