<template>
<h1>{{ title }}</h1>
<p>Welcome</p>
<teleport to=".modals" v-if="showModal">
  <Modal  theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">Sign up now</a>
      <a href="#">More info</a>
    </template>  
    <h1>Ninja giveaway !</h1>
    <p>Grab your ninja swag for half the price!</p>
  </Modal>
</teleport>

<teleport to=".modals" v-if="showModalTwo">
  <Modal  theme="dark" @close="toggleModalTwo">
    <template v-slot:noLinks>
      <p>This isn't a link.</p>
      <p>But is this?</p>
    </template>  
    <h1>Modal 2</h1>
    <p>Not so important announcement</p>
  </Modal>
</teleport>


<button @click.alt="toggleModal">Open modal 1 (alt+click)</button><br>
<button @click="toggleModalTwo">Open modal 2</button>
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
      
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    },
  }
}
</script>

<style>
#app, .modals {
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
