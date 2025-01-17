import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

import "@fortawesome/fontawesome-free/css/all.css";
import { store, key } from "./store";

createApp(App).use(router).use(store, key).mount("#app");
