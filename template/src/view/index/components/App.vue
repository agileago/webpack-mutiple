<template>
  <div class="index">
    <header class="header">Vue2 Webpack2 template</header>
    <img src="../assets/turn-pointer.png">
  </div>
</template>

<script>
  export default {
    data () {
      return { msg: 'Vue2 Webpack2 template' }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .index {
    text-align: center;
    font-family: Helvetica, sans-serif;

    img {
      width: 100px;
      height: 100px;
    }
  }
  .header {
    margin: 60px auto;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
  }
</style>