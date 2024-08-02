<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>
