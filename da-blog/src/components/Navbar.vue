<template>
  <header>
      <h1>Da Blog</h1>
      <nav>
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'Create' }">Create post</router-link>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  header h1 {
    color: #5299c2;
    font-size: 44px;
  }
  header a {
    color: #4c8baf;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: #3b7597;
    font-weight: bold;
  }
</style>