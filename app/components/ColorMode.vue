<template>
  <button
    @click="toggleColorMode"
    class="flex justify-center border border-gray-300 p-1 rounded-full"
    :class="
      colorMode.value === 'dark' ? 'bg-slate-800' : 'bg-dodgeroll-gold/90'
    "
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
</template>

<script setup>
const colorMode = useColorMode(); // Deve acessar a propriedade 'value'

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<style>
/* body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
} */
</style>
