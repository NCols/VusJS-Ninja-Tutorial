<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
import TagCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  components: { PostList, Spinner, getPosts, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();
    const postsWithTag = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag));
    }); // If the post includes the tag from the route parameters, then return it to the postsWithTag

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>