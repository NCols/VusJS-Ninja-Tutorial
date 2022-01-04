<template>
  <div class="home">
    <p>Home</p>
    <p ref="p">My name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: "Home",
  setup() {
    // Initialize the Composition API for our component. Similar to the data() function in the ninja-jobs project. This will run before any lifecycle hook (mounted etc). Inside setup() we can write any normal javascript.
    
    const p = ref(null)

    let name = 'mario'
    let age = 30

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test') // Add a 'test' class to out 'p.value' -> our text in the template.
      p.value.textContent = 'Hello ninjas'
    }

    return { name, age, handleClick, p } // The functions in setup() also need to be returned to be usable inside the template.
  }
};
</script>
