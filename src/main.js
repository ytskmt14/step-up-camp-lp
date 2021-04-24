import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App.vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false
Vue.use(VueHead)
Vue.use(VueTypedJs)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
