import Vue from 'vue'
import Router from 'vue-router'
import mission from '/home/specialjcg/site web/monsite/src/components/missionvision.vue'
import blogue from '/home/specialjcg/site web/monsite/src/components/blog.vue'
import portfolios from '/home/specialjcg/site web/monsite/src/components/carroussel-perso.vue'
import contacts from '/home/specialjcg/site web/monsite/src/components/contact.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'miss',
    component: mission
  },
  {
    path: '/blog',
    name: 'blog',
    component: blogue
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
})
