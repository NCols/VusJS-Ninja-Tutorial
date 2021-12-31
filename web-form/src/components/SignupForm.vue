<template>
  <form>
    <label>Email: </label>
    <input type="email" required v-model="email" />

    <label>Password: </label>
    <input type="password" required v-model="password" />

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web developer</option>
      <option value="designer">Web designer</option>
    </select>

    <label>Skills</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill" @click="removeSkill">
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>I accept the terms and conditions</label>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>TempSkill: {{ tempSkill }}</p>
  <p>Skills: {{ skills }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "", // v-model "email" form value is linked to this data
      password: "", // v-model "password" form value is linked to this data, etc.
      role: "designer", // Here we put a default initial value, which will display 'Web designer' in the form
      terms: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    removeSkill(e) {
      var skillToRemove = e.target.innerText;
      var skillsArray = this.skills;
      for (var i = 0; i < skillsArray.length; i++) {
        if (skillsArray[i] == skillToRemove) {
          skillsArray.splice(i, 1); // remove the eleemnt from array
          i--; //  decrement i since one one eleemnt removed from the array
        }
      }
      this.skills = skillsArray
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 10px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>