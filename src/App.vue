<template>
  <TopNavbar />
  <ErrorModal />
  <RouterView />
  <ThemeToggle />
</template>

<script setup>
import { RouterView } from 'vue-router';

import ErrorModal from '@/components/ErrorModal';
import TopNavbar from '@/components/TopNavbar';
import ThemeToggle from '@/components/ThemeToggle';
</script>
