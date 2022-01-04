<template>
  <div class="home">
    <p>Home</p>
    <p>My name is {{ name }} and my age is {{ age }}.</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">Age++</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    // const p = ref(null)

    const name = ref('Mario')
    const age = ref(30)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value = 45
    }

    return { name, age, handleClick } 
  }
};
</script>
