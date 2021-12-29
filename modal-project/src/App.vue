<template>
<h1>{{ title }}</h1>
<Modal :header="header" :text="text" theme="dark" />
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
      title: 'My first Vue app :-)', //This can be output in the template above
      header: 'Sign up for a giveaway',
      text: 'Grab your ninja swag',
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
  color: #285079;
  margin-top: 60px;
},
h1 { /* As it is, the styles in here apply to all other components as well. F.ex. if we put an h1 in Modal.vue, it will be styles by this one as well.*/
  border-bottom: 1px, solid, #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
