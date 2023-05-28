import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page1',
      component: () => import('../views/pageOne.vue')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('../views/pageOne.vue')
    },

    {
      path: '/page2',
      name: 'page2',
      component: () => import('../views/pageTwo.vue')
    },
  ]
})

export default router
