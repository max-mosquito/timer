import { createApp } from 'vue'
import App from './App.vue'
import TheContainer from "./components/TheContainer.vue";

const app = createApp(App)

app.component('TheContainer', TheContainer)

app.mount('#app')
