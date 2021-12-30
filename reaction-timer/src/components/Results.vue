<template>
  <div class="result">
        <p>Your reaction time: {{ score }}ms</p>
  </div>
</template>

<script>
export default {
    props: ["score"],
}
</script>

<style>
    .result {
        width: 400px;
        background: rgb(43, 105, 236);
        margin: 40px auto;
        padding: 40px 0;
        text-align: center;
        color: white;
        border-radius: 10px;
    }
</style>