import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../components/contact.vue'
import deleteContact from '../components/deleteContact'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
    
  },
  {
    path: '/deleteContact',
    name: 'deleteContact',
    component: deleteContact
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
