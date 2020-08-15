import Vue from 'vue'
import router from "@/router/router";
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
})