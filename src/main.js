// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../src/store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueSimplemde from 'vue-simplemde'
// import tools from '../static/js/tools.js'
import '../static/scss/style.scss'
import '../static/css/animate.min.css'
import  '../static/css/element.css'
import elTitleHeader from '../src/components/home/common/title_header'
import elSidebar from '../src/components/home/common/sidebar'
import elConfirmCancel from '../src/components/ui/confirm-cancel'


Vue.use(ElementUI)
Vue.use(VueSimplemde)
Vue.config.productionTip = false

// 全局组件
Vue.component('elSidebar', elSidebar)
Vue.component('elConfirmCancel', elConfirmCancel)
Vue.component('elTitleHeader', elTitleHeader)

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
