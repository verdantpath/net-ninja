<template>
  <h1>Real-time data</h1>
</template>
<script>
import { ref } from 'vue';

  export default {
    setup() {
      const posts = ref([])

      projectFirestore.collection('posts')
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          console.log(snap)
        })
    }
  }
</script>
<style>

</style>