import Home from "views/home";
import About from "views/about";

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
