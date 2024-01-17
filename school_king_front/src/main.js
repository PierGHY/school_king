import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Button from 'primevue/button';
import Column from "primevue/column";
import Image from "primevue/image";
import Lara from "./presets/lara";

const app = createApp(App);
app.component("Image", Image);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Button", Button);
app.use(PrimeVue, { unstyled: true, pt: Lara });
app.mount("#app");