<script setup lang="ts">
import HeroTop from '@/components/HeroTop';
import HomeCards from '@/components/HomeCards';
import JobList from '@/components/JobList';
</script>

<template>
  <HeroTop />
  <HomeCards />
  <JobList :limit="5" :showButton="true" />
</template>
