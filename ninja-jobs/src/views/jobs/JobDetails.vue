<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Job id: {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
      <p>We're trying to fetch the job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], // Receive the 'id' param that is sent via the router-link on Jobs.vue. Allowed because 'props: true' in index.js JobDetails routing.
  data() {
    return {
      job: null, // 'v-if' in template div avoids getting an error for job = null value, because it waits for job to actually be populated, so that v-if evaluates to true and displays the div with the data.
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id) // 'id' here references the prop. In this case we fetch just one object from the db, the one with the id we requested, and we store it in data and assign that to our job property.
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>