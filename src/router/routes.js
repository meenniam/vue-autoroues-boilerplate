import Home from "views/home.vue";
import About from "views/about.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: { layout: "basic-layout" }
  }
];

export default routes;
