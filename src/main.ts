import { createPinia } from 'pinia';
import { createApp } from 'vue';
import plugin from 'vue-toastify';
import 'vue-toastify/index.css';
import App from './App.vue';
import router from './router';
import './styles/global.css';

const pinia =  createPinia();
const app = createApp(App);

app.use(router)
app.mount('#app')
app.use(pinia);
app.use(plugin, {
	hideProgressbar: true,
	theme: 'light',
	iconEnabled: false,
});
