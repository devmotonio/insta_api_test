import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PostView from '@/components/Post.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
