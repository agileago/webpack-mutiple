import Vue from 'vue'
require('es6-promise').polyfill()
import 'weui'
import App from './components/App.vue'
import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)

Vue.config.devtools = true

window.$message = function (text) {
  Vue.$vux.toast.show({ text, type: 'text' })
}

new Vue({
  el: '#app',
  render: h => h(App)
})

