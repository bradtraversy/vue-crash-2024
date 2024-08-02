import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useErrorModalStore = defineStore('errorModal', () => {
  const isVisible = ref(false);
  const title = ref<string>('');
  const message = ref<string>('');

  const showErrorModal = (newTitle: string, newMessage: string) => {
    title.value = newTitle;
    message.value = newMessage;
    isVisible.value = true;
  };

  const hideErrorModal = () => {
    isVisible.value = false;
    title.value = '';
    message.value = '';
  };

  return {
    isVisible,
    title,
    message,
    showErrorModal,
    hideErrorModal,
  };
});
