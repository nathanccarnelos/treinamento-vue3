import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/multi-root',
    name: 'multi-root',
    component: () => import(/* webpackChunkName: "about" */ '../views/MultiRoot.vue')
  },
  {
    path: '/v-model',
    name: 'v-model',
    component: () => import(/* webpackChunkName: "about" */ '../views/VModel.vue')
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mixin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
