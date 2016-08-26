<template>
  <div class="index">
    <header class="header" @click="click">{{ msg }}</header>
    <p style="text-align: center;color: red;font-size: 20px;">Detail 页面</p>
    <div class="spinner">
      <img src="../assets/rings.svg">
    </div>
    <button @click="show = true">公共弹出框</button>
    <custom-dialog :show="show" @close="show = false"></custom-dialog>
  </div>
</template>

<script>
  import CustomDialog from '../../../common/components/Dialog.vue'
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
        console.log('hehe')
        show()
      }
    },
    components: { CustomDialog }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .index {
    text-align: center;
  }

  .spinner {
    width: 200px;
    height: 200px;
    margin: 10px auto;
    background-color: burlywood;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>