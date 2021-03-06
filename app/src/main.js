import Vue from 'vue'
import App from './App.vue'

import router from '@/router'

import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

//加一行注释
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
