import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import deleteContact from '../components/contacts/deleteContact.vue'
import updateContact from '../components/contacts/updateContact.vue'
import getcontacts from '../components/contacts/getcontacts.vue'
import getAccount from '../components/accounts/getAccount'
import Accounts from '../components/accounts/Accounts.vue'
import campaigns from '../components/campaigns/getCampaigns.vue'
import updateAccount from '../components/accounts/update.vue'
import allIncidents from '../components/incidents/getIncidents.vue'
import updateIncident from '../components/incidents/updateIncident.vue'
import messageBases from '../components/messageBases/messageBases'
import getOrganizations from '../components/organizations/getOrganizations'
import deleteUpdateO from '../components/organizations/deleteUpdate'
import channeltypes from '../components/channel/channelTypes'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/allIncidents',
    name: 'allIncidents',
    component: allIncidents
  },
  {
    path: '/updateIncident',
    name: 'updateIncident',
    component: updateIncident
  },
  {
    path: '/messageBases',
    name: 'messageBases',
    component: messageBases
  },
  {
    path: '/getOrganizations',
    name: 'getOrganizations',
    component: getOrganizations
  },
  {
    path: '/Organizations',
    name: 'deleteUpdateO',
    component: deleteUpdateO
  },
  {
    path: '/channels',
    name: 'channeltypes',
    component: channeltypes
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
