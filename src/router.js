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
      path: "/blog/",
      name: "blog-home",
      component: () =>
        import(/* webpackChunkName: "BlogHome" */ "@/views/BlogHome.vue")
    },
    {
      path: "/blog/:slug",
      name: "blog-post",
      component: () =>
        import(/* webpackChunkName: "BlogPost" */ "@/views/BlogPost.vue")
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
