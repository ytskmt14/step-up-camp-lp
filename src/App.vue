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
  name: "App",
  components: {
    Header,
    Footer
  },
  head: {
    title: {
      inner: "Welcome",
      complement: "step up camp",
    },
    script: [
      {
        type: "text/javascript",
        src: "src=https://www.googletagmanager.com/gtag/js?id=G-SWYJ0FYSTR",
        async: true,
      },
      {
        type: "text/javascript",
        inner:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SWYJ0FYSTR');",
      },
    ],
  },
};
</script>

<style>
.body {
  background-color: #efefef;
}
</style>