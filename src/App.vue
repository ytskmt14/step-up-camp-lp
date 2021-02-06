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
const Header = () => import(/* webpackChunkName: "Header" */ './components/section/Header.vue');
const Top = () => import(/* webpackChunkName: "Top" */ './components/section/Top.vue');
const About = () => import(/* webpackChunkName: "About" */ './components/section/About.vue');
const Works = () => import(/* webpackChunkName: "Works" */ './components/section/Works.vue');
const JoinUs = () => import(/* webpackChunkName: "JoinUs" */ './components/section/JoinUs.vue');
const Features = () => import(/* webpackChunkName: "Features" */'./components/section/Features.vue');

export default {
  name: 'App',

  components: {
    Header,
    Top,
    About,
    Works,
    JoinUs,
    Features,
  },

  data: () => ({
  }),
};
</script>

<style>
.body {
  background-color: #efefef;
}

</style>