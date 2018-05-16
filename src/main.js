// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/index.less'
import './assets/css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icons/font_6h3mvowtawcdi/iconfont.css'
import $ from 'jquery'
import vueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.use(vueResource)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
