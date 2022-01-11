<template>
  <div class="welcome container">
      <p>Welcome</p>
      <SignupForm />
      <LoginForm />
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
    components: { SignupForm, LoginForm }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid rgb(201, 201, 201);
    outline: none;
    color: rgb(126, 126, 126);
    margin: 10px auto;
  }
</style>