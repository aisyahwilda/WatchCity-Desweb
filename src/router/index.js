import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ReportPage from '../views/ReportPage.vue'
import EventsPage from '../views/EventsPage.vue'
import AboutMePage from '../views/AboutMePage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/report',
      name: 'report',
      component: ReportPage,
    },
    {
      path: '/events',
      name: 'events',
      component: EventsPage,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: AboutMePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
})

export default router
