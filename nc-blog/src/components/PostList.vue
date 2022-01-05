<template>
  <div class="post-list">
      <div v-for="post in posts" :key="post.id">
          <SinglePost :post="post" />
      </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => {
            console.log('Component mounted')
        }),       // In setup() lifecycle hooks take 'on' before the usual name.
        onUnmounted(() => {
            console.log('Component unmounted')
        }),
        onUpdated(() => {
            console.log('Component updated')
        })
    },
    mounted() {  // This works as well, but gets executed after the setup() ones. So not mandatory to use the ones above, but preferred option for Net Ninja.
        console.log('Mounted outside setup')
    }
}
</script>

<style>

</style>