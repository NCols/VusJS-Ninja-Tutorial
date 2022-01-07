<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts"

export default {
  name: "Home",
  components: { PostList },
  setup() {  // in order to reuse our code that fetches the data, we can externalize it into a composable (getPosts.js). So we put all the code we had in here in getPosts.js, and the 'import { ref }...' statement as well. But we have to import getPosts.
    const { posts, error, load } = getPosts()  // Runs the function, creates posts & error consts, returns consts and the load() function, but doesn't run it yet. Thanks to 'const { posts, error, load }' I can now use posts, error and load() in my document.

    load()

    return { posts, error }; 
  },
};
</script>
