<template>
  <div class="home">
    <p>Home</p>
    <p>My name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    // const p = ref(null)

    const name = ref('mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'luigi' // By default, name and age are not reactive variables. When they change, it won't auto update the values in our template. To make these values in 'setup()' reactive, we can use refs. => const name = ref('mario'). The value of a ref can be accessed with nameOfTheRef.value. When we turn a value into a ref(), we can then pass it as updatable data in the template (witout specifying '.value').
    }

    return { name, age, handleClick } 
  }
};
</script>
