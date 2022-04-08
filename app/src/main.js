import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)

import store from '@/store'

//加一行注释
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
