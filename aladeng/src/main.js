// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.config.productionTip = false
VueTouch.config.swipe = {
  threshold: 10 //手指左右滑动距离
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
