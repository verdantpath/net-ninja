<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/ninja.png" alt="ninjas" />
      <h1><router-link :to="{ name: 'home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'CreatePlaylist' }">Create Playlist</router-link>
          <router-link :to="{ name: 'UserPlaylists' }">My Playlists</router-link>
          <span>Hi there, {{ user.displayName }}</span>
          <button @click="handleSubmit">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { ref } from 'vue';
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

  export default {
    setup() {
      const { logout, error, isPending } = useLogout()
      const { user } = getUser()
      const router = useRouter()

      const handleSubmit = async () => {
        await logout()
        // console.log('user logged out: ', user)
        router.push({name: 'Login'})
      }

      return { handleSubmit, user }
    }
  }
</script>
<style scoped>
.navbar {
  padding: 16px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;

}
nav .links {
  margin-left: auto;
}
nav .links a, button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
}
</style>