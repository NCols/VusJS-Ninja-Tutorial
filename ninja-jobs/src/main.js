import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // We don't need to add '/index.js' here, index is automatically imported.

createApp(App).use(router).mount('#app')
