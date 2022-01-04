<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
      <p>We're trying to load the jobs listing...sorry for the wait</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        // This time we're going to fetch the 'jobs' data from the json server db and populate our jobs object in here to cycle through it in our template.
      ],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json()) // When only 1 argument in callback fction, no () needed for 'res' inside 'then'
      .then((data) => (this.jobs = data)) // We get the data (array object with the jobs data) and assign it to our jobs property.
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>