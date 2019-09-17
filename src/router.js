import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import City from "./views/City/City";
import Details from "./views/Details/Details";
import Scenery from "./views/Scenery/Scenery";
import MapId from "./views/MapId/MapId";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/details",
      name: "details",
      component: Details
    },
    {
      path: "/scenery",
      name: "scenery",
      component: Scenery
    },
    {
      path: "/mapId",
      name: "mapId",
      component: MapId
    }
  ]
});
