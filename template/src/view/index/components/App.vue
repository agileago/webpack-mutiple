<template>
  <div class="index">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return { msg: 'hello vue2 webpack2!' }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  $red: #fff27b;
  .index {
    transform: translate(0, 0);
    color: $red;
    border: 1px solid #ccc;
  }
</style>