<template>
  <div class="index">
    <p @click="click">{{ msg }}</p>
    <img src="../assets/scratch-bg.png">
    <div class="point"></div>
  </div>
</template>

<script>
  /* 测试webpack2 tree shaking */
  import { foo } from '../../../common/util/message'
  export default {
    data () {
      return { msg: 'hello vue2 webpack2!' }
    },
    methods: {
      click () {
        foo()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  $red: #ff4438;
  .index {
    transform: translate(0, 0);
    color: $red;
    border: 1px solid #ccc;
  }
  .point {
    width: 100px;
    height: 100px;
    background-image: url(../assets/turn-pointer.png);
    background-repeat: no-repeat;
  }
</style>