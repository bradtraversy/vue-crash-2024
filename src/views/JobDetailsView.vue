<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import BackButton from '@/components/BackButton';
import { JobSchema, type Job, type Company } from '@/services/jobs';
import { useHttpServiceStore } from '@/stores/http/useHttpServiceStore';
import { useSpinnerStore } from '@/stores/useSpinnerStore';
import { useJobsStore } from '@/stores/useJobsStore';

const httpService = useHttpServiceStore();
const spinnerService = useSpinnerStore();
const jobsService = useJobsStore();

const route = useRoute();
const router = useRouter();
const jobId = route.params.id;

const currentData = ref<Job>({
  id: '',
  title: 'Placeholder Title',
  type: 'Full-Time',
  location: 'In the cloud',
  description: 'Description text',
  salary: '140000 Eur yearly',
  company: {
    name: 'Placeholder  company',
    contactEmail: 'placeholder@dummy.com',
    description: 'company description',
    contactPhone: '1230-2432-233',
  } as Company,
});

const deleteJob = async () => {
  const confirm = window.confirm('Are you sure you want to delete this job?');
  if (confirm) {
    const res = await jobsService.removeJob(jobId.toString());
    if (res) {
      router.push('/jobs');
    }
  }
};
onMounted(async () => {
  const data = await httpService.get(`/api/jobs/${jobId}`);
  if (data) {
    currentData.value = JobSchema.parse(data);
  }
});
</script>
<template>
  <BackButton />
  <div v-if="spinnerService.isSpinning">
    <PulseLoader />
  </div>
  <section v-else class="bg-green-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div class="text-gray-500 mb-4">{{ currentData.type }}</div>
            <h1 class="text-3xl font-bold mb-4">{{ currentData.title }}</h1>
            <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="pi pi-map-marker text-xl text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ currentData.location }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">Job Description</h3>

            <p class="mb-4">
              {{ currentData.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

            <p class="mb-4">{{ currentData.salary }}</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Company Info</h3>

            <h2 class="text-2xl">{{ currentData.company.name }}</h2>

            <p class="my-2">
              {{ currentData.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ currentData.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ currentData.company.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <RouterLink
              :to="`/jobs/edit/${jobId}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Job</RouterLink
            >
            <button
              @click="deleteJob"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
