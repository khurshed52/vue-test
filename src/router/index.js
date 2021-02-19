import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PlayerDetails from '../views/PlayerDetails.vue'
import Faq from '../views/Faq.vue'
import Post from '../views/Post.vue'
import materialForm from '../views/materialForm.vue'
Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
      },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/playerdetails/:id',
      name: 'PlayerDetails',
      component: PlayerDetails
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: Faq
    },
    {
      path: '/post',
      name: 'POST',
      component: Post
    },
    {
      path: '/materialForm',
      name: 'materialForm',
      component: materialForm
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
