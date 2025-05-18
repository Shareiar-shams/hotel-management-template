import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/pages/Home.vue'
import AboutPage from '@/pages/About.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
