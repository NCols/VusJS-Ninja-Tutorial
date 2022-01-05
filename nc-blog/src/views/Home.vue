<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref('')
    const names = ref(['Mario', 'Yoshi', 'Luigi', 'Toad', 'Bowser', 'Koopa', 'Peach'])
    
    watch(search, () => {  // Watches the property 'search' and fires a function every time a change is registered.
      console.log('Watch function ran')
    })

    watchEffect(() => { // Runs the function every time any dependency in the function changes (any values, variables etc that we put in the function). So here is fires every time search.value changes. So like 'watch()' above, but here we don't have to explicitly specify what we are watching. Just any values that change within the function.
    // Also, watchEffect runs on page load, so we use watch() if we don't want it to run once every time, or if we do not want/can use a value/variable inside the function.
      console.log('WatchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames };
  },
};
</script>
