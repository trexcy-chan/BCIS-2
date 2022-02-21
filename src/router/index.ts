import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ResidentPage from '../views/ResidentPage.vue'
import RequestCert from '../views/RequestCert.vue'
import ApplicationCert from '../views/ApplicationCert.vue'
import Signup from '../views/Signup.vue'
import SignupAdmin from '../views/SignupAdmin.vue'
import TrackCert from '../views/TrackCert.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/resident',
    name: 'ResidentPage',
    component: ResidentPage
  },
  {
    path: '/requestcert',
    name: 'RequestCert',
    component: RequestCert
  },
  {
    path: '/applicationcert',
    name: 'ApplicationCert',
    component: ApplicationCert
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  },
  {
    path: '/signup-admin',
    name: 'SignupAdmin',
    component: SignupAdmin
  },
  {
    path: '/trackcert',
    name: 'TrackCertificate',
    component: TrackCert
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
