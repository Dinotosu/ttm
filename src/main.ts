import { createApp } from 'vue';
import './style.scss';
import './assets/styles/global.scss';
import './assets/styles/reset.scss';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import  App  from './App.vue';

const app = createApp(App);
app.mount('#app');
app.use(VueTelInput);