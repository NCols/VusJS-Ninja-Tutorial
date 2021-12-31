<template>
  <form>
      <label>Email: </label>
      <input type="email" required v-model="email">

      <label>Password: </label>
      <input type="password" required v-model="password">

      <label>Role:</label>
      <select v-model="role">
          <option value="developer">Web developer</option>
          <option value="designer">Web designer</option>
      </select>

      <div class="terms">
          <input type="checkbox" v-model="terms" required>
          <label>I accept the terms and conditions</label>
      </div>

      <div>
          <input type="checkbox" value="Shaun" v-model="names">
          <label for="Shaun">Shaun</label>
      </div>
      <div>
          <input type="checkbox" value="Brutus" v-model="names">
          <label for="Brutus">Brutus</label>
      </div>
      <div>
          <input type="checkbox" value="Karen" v-model="names">
          <label for="Karen">Karen</label>
      </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
    data() {
        return {
            email: '', // v-model "email" form value is linked to this data
            password: '', // v-model "password" form value is linked to this data, etc.
            role: 'designer', // Here we put a default initial value, which will display 'Web designer' in the form
            terms: false,
            names: [], // Have the checked boxes for the names appear in the array through <input type="checkbox" value="Shaun" v-model="names">
        }
    },
}
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
  input, select {
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