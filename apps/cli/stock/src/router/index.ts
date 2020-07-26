import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import Auth from '../views/Auth.vue';
import FormTutorial from '../views/FormTutorial.vue';
import store from '../store';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  
    {
      path: '/form',
      name: 'form',
      component: FormTutorial
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/auth',
    name: 'auth',
    component: Auth,
    beforeEnter(to, from, next){
      store.dispatch("tryAutoLogin")
      if(store.getters.isUserAuth){
        console.log("User is Auth")
        next("/dashboard")
      } else {
        next()
      }
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
