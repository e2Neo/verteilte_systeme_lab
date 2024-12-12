import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import router from "./router.js";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import 'primeicons/primeicons.css'
import '@/assets/style.css'

export const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);
app.use(ToastService);
app.component("Toast", Toast);
app.component("Button", Button);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Dialog", Dialog);
app.component("Card", Card);
app.component("InputText", InputText);
app.component("InputNumber", InputNumber);
app.mount("#app");
