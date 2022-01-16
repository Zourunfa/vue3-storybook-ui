import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/index.scss";
import LibUses from './lib-uses'


const app = createApp(App)


app.use(LibUses).mount("#app");
