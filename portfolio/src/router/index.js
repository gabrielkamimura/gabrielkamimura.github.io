import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projects/grand-cru-app',
      name: 'gcapp',
      component: () => import('../views/projects/GrandCruApp.vue'),
    },
    {
      path: '/projects/flex-confraria',
      name: 'flexConfraria',
      component: () => import('../views/projects/ConfrariaFlex.vue'),
    },
    {
      path: '/projects/sneaker-drop',
      name: 'sneakerDrop',
      component: () => import('../views/projects/SneakersDrop.vue'),
    },
    {
      path: '/projects/champagne-ds',
      name: 'champagneDS',
      component: () => import('../views/projects/ChampagneDS.vue'),
    },
  ],
})

export default router
