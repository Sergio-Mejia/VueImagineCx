import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../components/contacts/contact.vue'
import deleteContact from '../components/contacts/deleteContact.vue'
import updateContact from '../components/contacts/updateContact.vue'
import getcontacts from '../components/contacts/getcontacts.vue'

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
