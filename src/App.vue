<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container fluid>
      <router-view/>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
const Header = () => import(/* webpackChunkName: "Header" */ './components/organisms/Header');
const Footer = () => import(/* webpackChunkName: "Footer" */ './components/organisms/Footer');

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