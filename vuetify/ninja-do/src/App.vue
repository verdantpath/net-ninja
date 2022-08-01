<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <!-- <v-toolbar app dark class="indigo">
      <v-toolbar-title>
        Vuetify
      </v-toolbar-title>
    </v-toolbar> -->

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      
    }
  }
}
</script>
