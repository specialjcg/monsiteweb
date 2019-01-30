import Vue from "vue";
import Router from "vue-router";
import missionvision from "@/views/missionvision.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "miss",
      component: missionvision
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "@/views/portfolio.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "@/views/contact.vue")
    }
  ]
});
