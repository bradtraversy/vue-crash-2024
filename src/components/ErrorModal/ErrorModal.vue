<template>
  <transition name="modal">
    <div
      v-if="errorModalService.isVisible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="fixed inset-0 bg-black opacity-50"></div>
      <div
        ref="modal"
        class="bg-[var(--background-color)] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full border-[var(--border-color)]"
        @keydown.esc="doLogicAndHideModal"
        tabindex="0"
      >
        <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg class="h-6 w-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-10a.75.75 0 011.5 0v3.5a.75.75 0 01-1.5 0V8zm.75 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-[var(--text-color)]" id="modal-title">
                {{ errorModalService.title }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-[var(--text-color)]">
                  {{ errorModalService.message }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-[var(--background-color)] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            @click="doLogicAndHideModal"
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import router from '@/router';
import { useErrorModalStore } from '@/stores/useErrorModalStore';

const errorModalService = useErrorModalStore();

const doLogicAndHideModal = () => {
  router.push('/not-found');
  errorModalService.hideErrorModal();
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s;
}
.modal-enter,
.modal-leave-to /* .modal-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
