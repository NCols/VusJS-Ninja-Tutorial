<template>
<h1>{{ title }}</h1>
<p>Welcome</p>
<div v-if="showModal">
  <Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
</div>
<button @click.alt="toggleModal">Open modal (alt+click)</button>
</template>


<script>
import Modal from './components/Modal' // Import all data from Modal.vue

// Represents the root component. Name is not mandatory.
export default {
  name: 'App',
  components: {
    Modal // Here we export the Modal component we imported just above, so that we can use it in our template.
  },
  data() {
    return {
      title: 'Welcome on our app !', //This can be output in the template above
      header: 'Sign up for a giveaway',
      text: 'Grab your ninja swag',
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
