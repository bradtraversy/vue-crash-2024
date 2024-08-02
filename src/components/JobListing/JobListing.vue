<template>
  <div
    v-if="job"
    class="bg-[var(--background-color)] rounded-xl shadow-md relative job-listing border-[var(--border-color)]"
  >
    <div class="p-4">
      <div class="mb-6">
        <div class="text-[var(--text-color)] my-2">{{ job.type }}</div>
        <h3 class="text-xl font-bold text-[var(--text-color)]">{{ job.title }}</h3>
      </div>
      <div class="mb-5 text-[var(--text-color)]">
        {{ truncuatedDescription }}
      </div>
      <h3 class="text-[var(--primary)] mb-2">{{ job.salary }}</h3>
      <div class="border-[var(--border-color)] mb-5"></div>
      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-[var(--primary-dark)] mb-3">
          <i class="pi pi-map-marker text-[var(--primary-dark)]"></i>
          {{ job.location }}
        </div>
        <RouterLink
          :to="`/jobs/${job.id}`"
          class="h-[36px] bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';

import type { Job } from '@/services/jobs';

interface Props {
  job?: Job;
}

const props = defineProps<Props>();
const showFullDescription = ref(false);

const truncuatedDescription = computed(() => {
  const desc = props.job?.description || '';
  if (!showFullDescription.value && desc.length > 100) {
    return desc.slice(0, 100) + '...';
  }
  return desc;
});
</script>
