import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Projects from '../views/Projects'
import About from '../views/About'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Onehundred from '../views/Onehundred'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/onehundred',
    name: 'onehundred',
    component: Onehundred
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
