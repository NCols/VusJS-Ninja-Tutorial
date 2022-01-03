<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id // Take param from the route (url), assign to new var, send over to template
        }
    }
}
</script>

<style>

</style>