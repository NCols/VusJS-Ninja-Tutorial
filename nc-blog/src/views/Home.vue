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
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts"); // We wait for the fetch to be finished (await) and when it's done, the resulting data is stored in 'data'.
        if (!data.ok) {
          // If fetched data 'not ok' (see fetch result, there's an OK flag with the returned data)
          throw Error("No data available"); // So if data not ok, we thow an error, and this error will then be handled by the catch block below.
        }
        posts.value = await data.json(); // We take the data response we have, and we pass it into our posts constant by applying the json() method.
      } catch (err) {
        error.value = err.message; // We update the above created constant error with our message err.message.
        console.log(error.value);
      }
    };
    load();
    return { posts, error }; // We export the error const to use it in the template in case there was an issue while fetching the data.
  },
};
</script>
