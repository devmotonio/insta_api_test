<template>
  <div style="width: 25%" v-for="post in posts" :key="post.id">
    <img v-if="post.media_type == 'IMAGE' || post.media_type == 'CAROUSEL_ALBUM'" :src="post.media_url"
      style="width:100%;height=auto;" />
    <video v-if="post.media_type == 'VIDEO'" controls autoplay muted loop preload="auto" playsinline
      style="width:100%;height=auto;">
      <source :src="post.media_url" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import api from '@/services/api'

export default defineComponent({
  name: 'PostComponent',
  props: {
    msg: String
  },
  setup () {
    const posts = ref([])

    const load = async () => {
      const response = await api.get('&fields=media_type,media_url&limit=5')
      console.log(response)
      posts.value = response.data.data
    }

    onMounted(load)

    return {
      posts
    }
  }
})
</script>
