// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
import './common/js/vconsole'
console.log('test')

Vue.config.productionTip = false
fastclick.attach(document.body) // 移动端点击没有300毫秒的延迟
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
