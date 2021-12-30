<template>
  <div class="block" v-if="showBlock">
      Click me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false
        }
    },
    mounted() { // This is part of the lifecycle hooks. Events related to the lifecycle of the component that fire specific functions like below.
        console.log('Block component mounted'),
        console.log('Waiting timeout...'),
        setTimeout(() => {
            this.showBlock = true
            console.log(this.delay)
        }, this.delay) // Fire callback function avec randomly set delay (passed from App.vue)
    },
    updated() {
        console.log('Component updated')
    },
    unmounted() {
        console.log('Component unmounted')
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>