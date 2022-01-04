<template>
  <div class="home">
    <p>Home</p>
    <p>My name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
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

    const handleClick = () => {
      console.log('You clicked me')
    }

    return { name, age, handleClick } // The functions in setup() also need to be returned to be usable inside the template.
  }
};
</script>
