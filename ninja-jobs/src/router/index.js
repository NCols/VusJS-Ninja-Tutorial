import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [
  // Whenever we want to create a new route, all we have to do is create the new route in this 'routes' array, then register it in 'const router'.
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
  path: '/jobs/:id',
  name: 'JobDetails',
  component: JobDetails,
  props: true // To allow access to any route parameter as prop, as done in Jobs.vue template
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Allows to use back & forward buttons in browser
  routes
})

export default router
