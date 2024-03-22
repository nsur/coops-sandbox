import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import CustomersList from "./pages/CustomersList.vue";
import WidgetsList from "./pages/WidgetsList.vue";
import WidgetPage from "./pages/WidgetPage.vue";

const base = import.meta.env.BASE_URL;
const routes = [
  { path: base, name: "customers", component: CustomersList },
  {
    path: base + ":customer",
    name: "widgets",
    component: WidgetsList,
    props: true,
  },
  {
    path: base + ":customer/widget/:widgetId",
    name: "widget",
    component: WidgetPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
