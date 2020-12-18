import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'

const app = createApp(App)
  app.use(createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', component: Home },
      { path: '/multi-root', component: () => import('./views/MultiRoot.vue') },
      { path: '/teleport', component: () => import('./views/Teleport.vue') },
      { path: '/vmodel', component: () => import('./views/VModel.vue') },
      { path: '/composition-api', component: () => import('./views/CompositionApi.vue') },
      ]
    }
  ))
  app.mount('#app')
