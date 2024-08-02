<script setup>
import HomeCard from '@/components/HomeCard';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <HomeCard :bg="`bg-[var(--primary-light)]`">
          <h2 class="text-2xl font-bold text-[var(--primary-dark)]">For Developers</h2>
          <p class="mt-2 mb-4 text-[var(--primary-dark)]">
            Browse our Vue jobs and start your career today
          </p>
          <RouterLink
            to="/jobs"
            class="inline-block bg-[var(--primary-dark)] text-white rounded-lg px-4 py-2 hover:bg-[var(--primary)]"
          >
            Browse Jobs
          </RouterLink>
        </HomeCard>
        <HomeCard :bg="`bg-[var(--secondary-light)]`">
          <h2 class="text-2xl font-bold text-[var(--secondary-dark)]">For Employers</h2>
          <p class="mt-2 mb-4 text-[var(--secondary-dark)]">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-[var(--secondary-dark)] text-white rounded-lg px-4 py-2 hover:bg-[var(--secondary)]"
          >
            Add Job
          </RouterLink>
        </HomeCard>
      </div>
    </div>
  </section>
</template>
