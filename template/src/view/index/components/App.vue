<template>
  <div class="index">
    <header class="header" @click="click">{{ msg }}</header>
    <p style="text-align: center;color: red;font-size: 20px;">Index 页面</p>
    <img src="../assets/turn-pointer.png">
    <button @click="click">打开公共弹窗</button>
    <index-dialog :show="show" @close="show = false"></index-dialog>
  </div>
</template>

<script>
  import IndexDialog from '../../../common/components/Dialog.vue'
  import { show } from '../../../common/util/message'
  export default {
    data () {
      return {
        msg: 'Vue2 Webpack2 template',
        show: false
      }
    },
    methods: {
      click () {
        this.show = true
        show()
      }
    },
    components: { IndexDialog }
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