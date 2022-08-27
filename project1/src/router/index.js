import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import AboutView from "../views/AboutView.vue";
//import EventDetails from "../views/EventDetailView.vue";
import EventLayout from "@/views/event/EventLayout.vue";
import DetailEvent from "@/views/event/DetailEvent.vue";
import VaccinatedEvent from "@/views/event/VaccinatedEvent.vue";
import CommentEvent from "@/views/event/CommentEvent.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NetWorkErrorView from "@/views/NetworkErrorView.vue";
import NProgress from "nprogress";
import GStore from "@/store";
import EventService from "@/services/EventService.js";

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
    beforeEnter: (to) => {
      // <--- put API call here
      return EventService.getEvent(to.params.id) // Return and params.id
        .then((response) => {
          console.log("The loading work");
          // still need to set the data here
          GStore.event = response.data; //<-- Store Event
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              // < --Return
              name: "404Resource",
              params: { resource: "event" },
            };
          } else {
            return { name: "NetworkError" }; // <--- Return
          }
        });
    },
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
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetWorkErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
