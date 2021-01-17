import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

const vueScrollTo = new VueScrollTo({
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

export default vueScrollTo;