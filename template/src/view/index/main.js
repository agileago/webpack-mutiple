import Vue from 'vue'
require('es6-promise').polyfill()
import 'weui'
import App from './components/App.vue'
import { ToastPlugin } from 'vux'
import * as svgicon from 'vue-svgicon'
import '../../common/style/svg.css'
import '../../common/icons'

Vue.use(svgicon, {
  tagname: 'svgicon',
  defaultWidth: '1.2em',
  defaultHeight: '1.2em'
})

Vue.use(ToastPlugin)

Vue.config.devtools = true

window.$message = function (text) {
  Vue.$vux.toast.show({ text, type: 'text' })
}

new Vue({
  el: '#app',
  render: h => h(App)
})

