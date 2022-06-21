import Vue from "vue";
import App from "./App.vue";

import Home from "@/components/pages/Home";
import Contact from "@/components/pages/Contact";

import Biography from "@/components/pages/about/Biography";
import Pets from "@/components/pages/about/Pets";
import Resume from "@/components/pages/about/Resume";

import CS601 from "@/components/pages/projects/CS601";
import CS526 from "@/components/pages/projects/CS526";
import Other from "@/components/pages/projects/Other";

import CS601_HW3 from "@/components/pages/projects/CS601/CS601_HW3";
import CS601_HW4 from "@/components/pages/projects/CS601/CS601_HW4";
import CS601_HW5 from "@/components/pages/projects/CS601/CS601_HW5";
import CS601_HW6 from "@/components/pages/projects/CS601/CS601_HW6";

import Router from "vue-router";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/contact", component: Contact },
  { path: "/about/biography", component: Biography },
  { path: "/about/pets", component: Pets },
  { path: "/about/resume", component: Resume },
  { path: "/projects/cs601", component: CS601 },
  { path: "/projects/cs526", component: CS526 },
  { path: "/projects/other", component: Other },
  { path: "/projects/cs601/hw3", component: CS601_HW3 },
  { path: "/projects/cs601/hw4", component: CS601_HW4 },
  { path: "/projects/cs601/hw5", component: CS601_HW5 },
  { path: "/projects/cs601/hw6", component: CS601_HW6 }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
