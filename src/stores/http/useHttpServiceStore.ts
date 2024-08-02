import type { AxiosError, AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';

import { useHttpStore } from './useHttpStore';

import { useErrorModalStore } from '@/stores/useErrorModalStore';
import type { APIResponse } from '@/services/types';

export const useHttpServiceStore = defineStore('httpService', () => {
  const errorModalStore = useErrorModalStore();
  const toast = useToast();
  const http = useHttpStore();

  async function get<T>(
    url: string,
    config = {},
    toastMessage = ''
  ): Promise<APIResponse<T> | AxiosResponse | void | any> {
    try {
      const response = await http.get(url, config);
      if (toastMessage) {
        toast.success(toastMessage);
      }
      return response?.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      errorModalStore.showErrorModal('Error', error.message);
      return false;
    }
  }

  async function post<T>(
    url: string,
    data = {},
    config = {},
    toastMessage = ''
  ): Promise<APIResponse<T> | AxiosResponse | void | any> {
    try {
      const response = await http.post(url, data, config);
      if (toastMessage) {
        toast.success(toastMessage);
      }
      return response?.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      errorModalStore.showErrorModal('Error', error.message);
      return false;
    }
  }

  async function put(
    url: string,
    data = {},
    config = {},
    toastMessage = ''
  ): Promise<AxiosResponse | void | any> {
    try {
      const response = await http.put(url, data, config);
      if (toastMessage) {
        toast.success(toastMessage);
      }
      return response?.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      errorModalStore.showErrorModal('Error', error.message);
      return false;
    }
  }

  async function patch(
    url: string,
    data = {},
    config = {},
    toastMessage = ''
  ): Promise<AxiosResponse | void | any> {
    try {
      const response = await http.patch(url, data, config);
      if (toastMessage) {
        toast.success(toastMessage);
      }
      return response?.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      errorModalStore.showErrorModal('Error', error.message);
      return false;
    }
  }

  async function del(
    url: string,
    config = {},
    toastMessage = ''
  ): Promise<AxiosResponse | void | any> {
    try {
      const response = await http.delete(url, config);
      if (toastMessage) {
        toast.success(toastMessage);
      }
      return response?.data;
    } catch (err: unknown) {
      const error = err as AxiosError;
      errorModalStore.showErrorModal('Error', error.message);
      return false;
    }
  }

  return { get, post, put, patch, del };
});
