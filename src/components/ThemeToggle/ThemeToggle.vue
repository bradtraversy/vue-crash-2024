<template>
  <button
    @click="toggleTheme"
    class="absolute top-4 right-4 bg-[var(--primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--primary-dark)] focus:outline-none"
  >
    Toggle Theme
  </button>
</template>

<script setup lang="ts">
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute(
    'data-theme',
    currentTheme === 'yellow' ? 'default' : 'yellow'
  );
};
</script>

<style scoped>
button {
  transition: background-color 0.3s;
}
</style>
