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
import { computed, ref } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref('')
    const names = ref(['Mario', 'Yoshi', 'Luigi', 'Toad', 'Bowser', 'Koopa', 'Peach'])
    
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value)) // Loop through the names array, and check if each name includes the current 'search' value. Now the list of names in the template is updated live depending on whatever letter or term I search for. computed() gives us an updated value based on other values.
    })

    return { names, search, matchingNames };
  },
};
</script>
