import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
