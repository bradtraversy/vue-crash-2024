import '@/assets/main.css';
import 'primeicons/primeicons.css';
import 'vue-toastification/dist/index.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Toast from 'vue-toastification';

import App from './App.vue';
import router from '@/router';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Toast);

app.mount('#app');
