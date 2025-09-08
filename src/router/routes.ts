import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    name: 'mainLayout',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
    ],
  },
] as RouteRecordRaw[]
