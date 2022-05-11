<template>
  <v-app>
    <v-toolbar app dark class="indigo">
      <v-toolbar-title>
        Vuetify
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>
