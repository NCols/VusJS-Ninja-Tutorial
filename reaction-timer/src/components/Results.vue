<template>
  <div class="result">
        <p class="reactTime">Reaction time: {{ score }}ms</p>
        <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ["score", "appreciation"],
    data() {
        return {
            rank: null,
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Wow! So fast!'
        } else if (this.score < 400) {
            this.rank = 'Rapid, but could be faster!'
        } else {
            this.rank = "zzZZzzzZZzzzzZZZZzz"
        }

    }
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
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(72, 74, 77, 0.5);
    }
    .result reactTime {
        font-size: 25px;
    }
    .result .rank {
        font-size: 1.5em;
        font-weight: bold;
        color:white;
    }
</style>