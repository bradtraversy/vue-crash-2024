import { defineStore } from 'pinia';
import { ref } from 'vue';

import { JobResponseSchema, type Job } from '@/services/jobs';
import { useHttpServiceStore } from './http/useHttpServiceStore';

export const useJobsStore = defineStore('jobsStore', () => {
  const httpService = useHttpServiceStore();

  const jobs = ref<Job[]>([] as Job[]);

  const initJobs = async (data?: Job[]) => {
    if (data) {
      jobs.value = data;
      return;
    }

    try {
      const data = await httpService.get('/api/jobs');
      if (data) {
        jobs.value = JobResponseSchema.parse(data);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const getJob = async (id: string) => {
    try {
      return httpService.get(`/api/jobs/${id}`);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const removeJob = async (id: string) => {
    try {
      return await httpService.del(`/api/jobs/${id}`, {}, 'Job deleted succesfully.');
    } catch (error) {
      console.error('Error', error);
    }
  };
  const editJob = async (job: Job) => {
    try {
      return await httpService.put(`/api/jobs/${job.id}`, job, {}, 'Job updated successfully');
    } catch (error) {
      console.error('Error', error);
    }
  };
  const addJob = async (job: Job) => {
    try {
      return await httpService.post('/api/jobs', job, {}, 'Job added');
    } catch (error) {
      console.error('Error', error);
    }
  };

  return { jobs, initJobs, addJob, getJob, editJob, removeJob };
});
