<template>
  <div class="shape">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '我是异步组件'
      }
    }
  }
</script>

<style>
  .shape {
    width: 200px;
    height: 200px;
    line-height: 200px;
    border-radius: 50%;
    background-color: #3cc51f;
    color: #fff;
    text-align: center;
    margin: 10px auto;
  }
  .shape {
    color: #fff;
  }
</style>