<template>
  <div class="index">
    <menu></menu>
    index html
    <div class="pointer"></div>
    <img src="../assets/scratch-bg.png" alt="">
  </div>
</template>

<script type="text/babel">
  import Menu from 'src/common/components/Menu.vue'

  export default {
    components: { Menu }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .index {
    background-color: red;
  }

  .pointer {
    width: 200px;
    height: 200px;
    background-image: url("../assets/turn-pointer.png");
  }
</style>