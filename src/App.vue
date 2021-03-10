<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-container fluid>
        <Top></Top>
        <About></About>
        <Works></Works>
        <Features></Features>
        <JoinUs></JoinUs>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const Header = () =>
  import(/* webpackChunkName: "Header" */ "./components/section/Header.vue");
const Top = () =>
  import(/* webpackChunkName: "Top" */ "./components/section/Top.vue");
const About = () =>
  import(/* webpackChunkName: "About" */ "./components/section/About.vue");
const Works = () =>
  import(/* webpackChunkName: "Works" */ "./components/section/Works.vue");
const JoinUs = () =>
  import(/* webpackChunkName: "JoinUs" */ "./components/section/JoinUs.vue");
const Features = () =>
  import(
    /* webpackChunkName: "Features" */ "./components/section/Features.vue"
  );

export default {
  name: "App",
  components: {
    Header,
    Top,
    About,
    Works,
    JoinUs,
    Features,
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