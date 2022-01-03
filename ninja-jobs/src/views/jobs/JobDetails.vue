<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    props: ['id'], // Receive the 'id' param that is sent via the router-link on Jobs.vue. Allowed because 'props: true' in index.js JobDetails routing.
    data() {
        return {
            // id: this.$route.params.id // Take param from the route (url), assign to new var, send over to template => Not needed anymore with props: ['id'] above
        }
    }
}
</script>

<style>

</style>