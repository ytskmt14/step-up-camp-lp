<template>
  <v-app>
    <Header/>
      <router-view/>
    <Footer/>
  </v-app>
</template>

<script>
const Header = () => import(/* webpackChunkName: "Header" */ './components/Header');
const Footer = () => import(/* webpackChunkName: "Footer" */ './components/Footer');

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },
  head: {
    title: {
      inner: 'Welcome',
      complement: 'step up camp'
    }
  },
};
</script>

<style>
.body {
  background-color: #efefef;
}

</style>