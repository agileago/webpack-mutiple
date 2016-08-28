<template>
  <transition name="fade">
    <div class="dialog" v-show="show">
      <div class="dialog-wrapper">
        <div class="dialog-container">
          <div class="dialog-title">
            <slot name="title">
              <h2 style="text-align: center;color: red;">标题</h2>
            </slot>
          </div>
          <div class="dialog-body">
            <slot name="body"><p style="text-align: center">内容</p></slot>
          </div>
          <div class="dialog-footer">
            <slot name="footer"><a href="javascript:void(0)" class="btn" @click="$emit('close')">确定</a></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['show']
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
  }
  .dialog-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  .dialog-container {
    width: 300px;
    margin: 0 auto;
    background-color: #fff;
    padding: 10px;
  }

  .fade-enter {
    background-color: rgba(0, 0, 0, 0);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: background-color .3s ease;
  }
  .fade-leave {
    background-color: rgba(0, 0, 0, 0);
  }
  .dialog-body {
    background-image: url("../assets/test.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>  