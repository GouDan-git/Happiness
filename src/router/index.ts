import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/picture",
      name: "picture",
      component: () => import("@/views/Picture.vue"),
    },
  ],
});

export default router;
