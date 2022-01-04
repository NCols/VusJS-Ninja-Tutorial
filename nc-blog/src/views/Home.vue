<template>
  <div class="home">
    <p>Home</p>
    <p>My name is {{ name }} and my age is {{ age }}.</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    // Initialize the Composition API for our component. Similar to the data() function in the ninja-jobs project. This will run before any lifecycle hook (mounted etc). Inside setup() we can write any normal javascript.
    console.log("setup");

    let name = 'mario'
    let age = 30

    return { name: name, age: age }
  }
};
</script>
