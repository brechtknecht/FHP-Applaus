import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Aussteller from './views/Aussteller.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aussteller/:id',
      name: 'Aussteller',
      component: Aussteller
    }
  ]
})
