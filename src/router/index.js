import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../components/contact.vue'
import deleteContact from '../components/deleteContact'
import updateContact from '../components/updateContact'
import getcontacts from '../components/getcontacts.vue'

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
  },
  {
    path: '/updateContact',
    name: 'updateContact',
    component: updateContact
  },
  {
    path: '/getcontacts',
    name: 'getcontacts',
    component: getcontacts
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
