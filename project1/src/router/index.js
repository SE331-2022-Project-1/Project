import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
import EventDetails from "../views/EventDetailView.vue";

const routes = [
  {
    path: "/",
    name: "EventListView",
    component: EventListView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/patient/:id",
    name: "EventDetails",
    component: EventDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
