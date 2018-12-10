/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable space-in-parens */
/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
const mission = () => import( /* webpackChunkName: "group-foo" */ '/home/specialjcg/site web/monsite/src/components/missionvision.vue');

const blogue = () => import( /* webpackChunkName: "group-foo" */ '/home/specialjcg/site web/monsite/src/components/BlogHome.vue');
const bloguepost = () => import( /* webpackChunkName: "group-foo" */ '/home/specialjcg/site web/monsite/src/components/BlogPost.vue');
const portfolios = () => import( /* webpackChunkName: "group-foo" */ '/home/specialjcg/site web/monsite/src/components/carroussel-perso.vue');
const contacts = () => import( /* webpackChunkName: "group-foo" */ '/home/specialjcg/site web/monsite/src/components/contact.vue');
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'miss',
      component: mission
  },
    {
      path: '/blog/',
      name: 'blog-home',
      component: blogue
    },
    {
      path: '/blogpost/:slug',
      name: 'blog-post',
      component: bloguepost
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolios
    },
    {
      path: '/contact',
      name: 'contact',
      component: contacts
    }
  ]
});
