//Define our routing rules//

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotfoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    // Redirect Routes
    {
        path: "/home",
        redirect:"/"
      },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      // dynamic Paths
      path: "/cars/:id",
      name: "car",
      component: CarView,
      children: [
        {
          path: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/:catchall(.*)*",
      name:"Notfound",
      component: NotfoundView,
    },
  ],
});

export default router;
