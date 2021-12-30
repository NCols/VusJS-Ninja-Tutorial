<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null, // Will store a set interval of 10ms
      reactionTime: 0, // and every 10ms, we will increase this by 10ms
    };
  },
  mounted() {
    // This is part of the lifecycle hooks. Events related to the lifecycle of the component that fire specific functions like below.
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay); // Fire callback function avec randomly set delay (passed from App.vue)
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        // setInterval is a timer included in js
        this.reactionTime += 10;
      }, 10); // Run our callback function every 10ms
    },
    stopTimer() {
      clearInterval(this.timer); // When we clear the interval, setInterval above is no longer going to fire.
      this.$emit('end', this.reactionTime) // Now that we have that reaction time, we need to send it back up to the parent App.vue component
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: rgb(43, 105, 236);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  box-shadow: 5px 5px 5px rgba(72, 74, 77, 0.5);
}
</style>