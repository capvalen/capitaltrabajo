import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';


const app = createApp(App)

app.config.globalProperties.axios = axios;
app.config.globalProperties.servidor = 'http://localhost/capitaltrabajo/api/';
//app.config.globalProperties.servidor = 'https://capitaltrabajo.infocatsoluciones.com/api/';

app.use(router)
app.mount('#app')