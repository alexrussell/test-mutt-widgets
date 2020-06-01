import Vue from 'vue'
import App from './App.vue'
import MuttVue from '@mutt/widgets-vue'

Vue.use(MuttVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
