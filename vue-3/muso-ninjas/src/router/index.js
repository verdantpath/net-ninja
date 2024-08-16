import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'

// route guard
import { projectAuth } from '../firebase/config';

const requireAuth = (to,from,next) => {
  
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, 
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/playlists/create',
      name: 'CreatePlaylist',
      component: CreatePlaylist
    }
  ]
})

export default router
