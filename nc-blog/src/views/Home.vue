<template>
  <div class="home">
    <p>Home</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    // Initialize the Composition API for our component. Similar to the data() function in the ninja-jobs project. This will run before any lifecycle hook (mounted etc).
    console.log("setup");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
