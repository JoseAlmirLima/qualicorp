import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "vue-select/dist/vue-select.css";
import Multiselect from "vue-multiselect";

const app = createApp(App);
app.component("multi-select", Multiselect);

createApp(App).mount("#app");
