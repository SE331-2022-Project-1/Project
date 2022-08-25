import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
//import EventDetails from "../views/EventDetailView.vue";

import EventLayout from "@/views/event/EventLayout.vue";
import DetailEvent from "@/views/event/DetailEvent.vue";
import VaccinatedEvent from "@/views/event/VaccinatedEvent.vue";
import CommentEvent from "@/views/event/CommentEvent.vue";

const routes = [
  {
    path: "/",
    name: "EventListView",
    component: EventListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },

  {
    path: "/events/:id",
    name: "EventLayout",
    component: EventLayout,
    props: true,
    children: [
      {
        path: "",
        name: "DetailEvent",
        component: DetailEvent,
        props: true,
      },
      {
        path: "vaccinated",
        name: "VaccinatedEvent",
        props: true,
        component: VaccinatedEvent,
      },
      {
        path: "comment",
        name: "CommentEvent",
        props: true,
        component: CommentEvent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
