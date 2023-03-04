//Define our routing rules//

import { createRouter, createWebHistory } from "vue-router";


import QuizesView from "../views/QuizesView.vue";
import NotfoundView from "../views/404View.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuizesView,
    },
    {
        path:"/quiz/:id",
        name: "quiz",
        component: QuizView,
    },
    {
      path: "/:catchall(.*)*",
      name: "Notfound",
      component: NotfoundView,
    },
  ],
});

export default router;
