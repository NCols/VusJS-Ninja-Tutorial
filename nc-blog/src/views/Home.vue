<template>
  <div class="home">
    <h1>Home</h1>
      <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'Welcome to the blog', body: 'Building a body.', id: 1},
      { title: 'Top 5 CSS tips', body: '1 - Do not talk about CSS.', id: 2},     
    ])
    
    return { posts }
  },
};
</script>
