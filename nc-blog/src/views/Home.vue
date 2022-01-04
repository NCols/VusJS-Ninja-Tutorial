<template>
  <div class="home">
    <p>Home</p>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: 'Mario', age: 30 })

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    return { ninjaOne, updateNinjaOne } 
  }
};
</script>
