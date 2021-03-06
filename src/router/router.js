import Vue from 'vue'
import VueRouter from 'vue-router'
const Top = () => import('../components/section/Top.vue');
const About = () => import( '../components/section/About.vue');
const Contact = () => import('../components/section/Contact.vue');

Vue.use(VueRouter)

export default  new VueRouter({
  mode: 'history',
  routes:[
  {path:'/',name:'top',component:Top,},
  {path: '/about',name: 'about',component: About,},
  {path: '/contact',name: 'contact',component:Contact,}  
] })
