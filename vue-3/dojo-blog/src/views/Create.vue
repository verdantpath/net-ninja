<template>
  <div class="create">
    <form action="">
      <label>Title</label>
      <input v-model="title" type="text" required>
      <label>Content</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text">
      <button>Add Post</button>
    </form>
  </div>
</template>
<script>
import { ref } from 'vue';

  export default {
    setup() {
      const title = ref('')
      const body = ref('')
      const tag = ref('')
      const tags = ref([])

      return { title, body, tag }
    }
  }
</script>
<style>

</style>