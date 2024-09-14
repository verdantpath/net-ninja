import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CreatePlaylist from '../views/playlists/CreatePlaylist.vue'
import PlaylistDetails from '../views/playlists/PlaylistDetails.vue'

// route guard
import { projectAuth } from '../firebase/config';

const requireAuth = (to,from,next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth 
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
      component: CreatePlaylist,
      beforeEnter: requireAuth
    },
    {
      path: '/playlists/:id',
      name: 'PlaylistDetails',
      component: PlaylistDetails,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/playlists/user',
      name: 'UserPlaylists', 
      component: UserPlaylist,
      beforeEnter: requireAuth
    }
  ]
})

export default router
