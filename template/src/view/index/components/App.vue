<template>
  <div class="index">
    <header class="index-title">{{ msg }}</header>
    <h4 class="main-title header">特点</h4>
    <div class="main">
      <h2>插入图片</h2>
      <div class="insert-img"><img src="../assets/turn-pointer.png"></div>
      <h2>背景图片</h2>
      <div class="bg-img"></div>
      <h2>自动填充css前缀</h2>
      <div class="prefix-css"></div>
      <h2>异步加载
        <button @click="asyncLoad" class="weui-btn weui-btn_mini weui-btn_primary">点我加载</button>
      </h2>
      <div class="flex">flex布局</div>
      <shape v-if="load"></shape>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Vue多页面脚手架',
        load: false
      }
    },
    methods: {
      asyncLoad () {
        this.load = true
      }
    },
    components: {
      Shape: () => System.import('./Shape.vue')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .index-title {
    text-align: center;
    font-size: 30px;
    margin-top: 50px;
    color: #42b983;
    letter-spacing: 3px;
    animation: slideTop 1s ease;
  }
  @keyframes slideTop {
    0% {
      opacity: 0.1;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .main {
    max-width: 80%;
    margin: 10px auto;
    text-align: center;

    h2 {
      font-size: 18px;
      padding: 10px;
      color: #10aeff;
    }
  }
  .main-title {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    color: #586c94;
    margin-bottom: 20px;
  }
  .insert-img {
    img {
      width: 100px;
    }
  }
  .bg-img {
    height: 100px;
    background-image: url("../assets/turn-pointer.png");
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: center center;
  }
  .prefix-css {
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 60px solid red;
    display: inline-block;
    transform: rotate(45deg);
  }
  .flex {
    display: flex;
    align-items: center;
    background-color: #ccc;
    color: #fff;
    justify-content: center;
    height: 50px;
  }
</style>