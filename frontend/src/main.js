import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from "./App.vue"
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast"
import router from "./router.js"

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(router)
app.use(ToastService);
app.component("Toast", Toast)
app.mount('#app')
