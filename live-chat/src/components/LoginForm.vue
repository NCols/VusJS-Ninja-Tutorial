<template>
  <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context) { // 'context' necessary to access 'emit()' method in 'setup()'
        // refs
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                // We will emit an event that will trigger authenticated users (only) to be redirected to the chatroom
                context.emit('login')
            }
        }

        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>