<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref('')
    const names = ref(['Mario', 'Yoshi', 'Luigi', 'Toad', 'Bowser', 'Koopa', 'Peach'])
    
    const stopWatch = watch(search, () => {  // Now if we want to stop watching, we can put the watch() function in a constant, like here, and invoke this new const function at some point. This will effectively stop the watch. Same for watchEffect.
      console.log('Watch function ran')
    })

    const stopEffect = watchEffect(() => { 
      console.log('WatchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick };
  },
};
</script>
