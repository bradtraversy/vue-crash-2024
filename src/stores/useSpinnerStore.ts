import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSpinnerStore = defineStore('spinner', () => {
  const isSpinning = ref(true);

  function showSpinner() {
    isSpinning.value = true;
  }

  function hideSpinner() {
    isSpinning.value = false;
  }

  return {
    isSpinning,
    showSpinner,
    hideSpinner,
  };
});
