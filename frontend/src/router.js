import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Aussteller from './views/Aussteller.vue'
import Impressum from './views/Impressum.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: Impressum
    },
    {
      path: '/aussteller/:id',
      name: 'Aussteller',
      component: Aussteller
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  	 if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
