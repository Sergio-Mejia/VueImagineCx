import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import contact from '../components/contacts/contact.vue'
import deleteContact from '../components/contacts/deleteContact.vue'
import updateContact from '../components/contacts/updateContact.vue'
import getcontacts from '../components/contacts/getcontacts.vue'
import getAccount from '../components/accounts/getAccount'
import Accounts from '../components/accounts/Accounts.vue'
import campaigns from '../components/campaigns/getCampaigns.vue'
import updateAccount from '../components/accounts/update.vue'

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
  {
    path: '/getAccount',
    name: 'getAccount',
    component: getAccount
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },
  {
    path: '/updateAccount',
    name: 'updateAccount',
    component: updateAccount
  },
  {
    path: '/campaigns',
    name: 'campaigns',
    component: campaigns
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
