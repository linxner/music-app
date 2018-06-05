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
import axios from 'axios'
import vueLazyload from 'vue-lazyload'
import store from './store'
import 'font-awesome/css/font-awesome.css'

Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(vueLazyload, {
  loading: require('assets/images/person_300.png'),
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
