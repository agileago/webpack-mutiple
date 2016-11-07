import Vue from 'vue'
require('es6-promise').polyfill()
import 'weui'
import App from './components/App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

