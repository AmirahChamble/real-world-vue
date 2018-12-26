import Vue from "vue";
import Router from "vue-router";
import EventCreate from "./views/EventCreate.vue";
import EventList from "./views/EventList.vue";
import EventShow from "./views/EventShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event",
      name: "event-show",
      component: EventShow
    },
    {
      path: "/event/create",
      name: "event-create",
      component: EventCreate
    }
  ]
});
