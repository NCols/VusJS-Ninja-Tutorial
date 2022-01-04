<template>
  <div class="home">
    <p>Home</p>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: 'Mario', age: 30 })
    const ninjaTwo = reactive({ name: 'Luigi', age: 35 })

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45 // With reactive, no need to specify '.value' to access & change the value property.
      // Drawbacks: - We cannot use primitive values in reactive => const x = reactive('luigi') wouldn't work.
      // We'll rather continue using refs (mostly at least)
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo } 
  }
};
</script>
