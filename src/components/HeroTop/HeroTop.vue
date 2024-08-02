<template>
  <section class="bg-[var(--primary)] py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ props.title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ props.subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface HeroProps {
  title?: string;
  subtitle?: string;
}

const props = withDefaults(defineProps<HeroProps>(), {
  title: 'Become a Vue Dev',
  subtitle: 'Find the Vue job that fits your skills and needs',
});
</script>
