<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>
<script>
import useLogin from "@/composables/useLogin"
import { useRouter } from 'vue-router'
import { ref } from "vue";
  export default {
    setup() {
      const { error, login, isPending } = useLogin()
      const router = useRouter()

      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        const res = await login(email.value, password.value)
        router.push({ name: 'UserPlaylists' })
        if(!error.value) {
          console.log('user logged in') 
        }
      }

      return { email, password, handleSubmit, error, isPending }
    }
  }
</script>
<style>

</style>