import Vue from 'vue'
import App from './App.vue'

//加一行注释
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
