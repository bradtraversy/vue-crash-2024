import { defineStore } from 'pinia';

import http from '@/server/api/http';
import { useErrorModalStore } from '@/stores/useErrorModalStore';
import { useSpinnerStore } from '@/stores/useSpinnerStore';

export const useHttpStore = defineStore('http', () => {
  const spinnerService = useSpinnerStore();
  const errorModalStore = useErrorModalStore();

  // Request Interceptor
  http.interceptors.request.use(
    (config) => {
      spinnerService.showSpinner();
      return config;
    },
    (error) => {
      spinnerService.hideSpinner();
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  http.interceptors.response.use(
    (response) => {
      spinnerService.hideSpinner();
      return response;
    },
    (error) => {
      spinnerService.hideSpinner();
      errorModalStore.showErrorModal('Error', error.message);
      return Promise.reject(error);
    }
  );
  return http;
});
