import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import Base from "./utils/Base"
window.Base = Base

new Vue({
  el: '#app',
  render: h => h(App)
})
