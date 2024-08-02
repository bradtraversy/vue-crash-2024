<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
      <!-- <div v-if="spinnerService.isSpinning" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in jobsService.jobs.slice(0, props.limit) || jobsService.jobs.length"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>

  <section v-if="props.showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import JobListing from '@/components/JobListing';
import { useJobsStore } from '@/stores/useJobsStore';

const jobsService = useJobsStore();

interface JobListingsProps {
  showButton: boolean;
  limit: number;
}
const props = withDefaults(defineProps<JobListingsProps>(), {
  showButton: true,
  limit: 3,
});

onMounted(async () => {
  await jobsService.initJobs();
});
</script>
