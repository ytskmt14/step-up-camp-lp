import Vue from 'vue'
import VueRouter from 'vue-router'
const Top = () => import('../pages/Top');
const About = () => import( '../pages/About');
const Contact = () => import('../pages/Contact');

Vue.use(VueRouter)

export default  new VueRouter({
  mode: 'history',
  routes:[
  {path:'/',name:'top',component:Top,},
  {path: '/about',name: 'about',component: About,},
  {path: '/contact',name: 'contact',component:Contact,}  
] })
