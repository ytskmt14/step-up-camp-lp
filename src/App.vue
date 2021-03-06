<template>
  <v-app>
      <Header></Header>
    <v-main>
      <v-container fluid>
      <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
const Header = () => import(/* webpackChunkName: "Header" */ './components/section/Header.vue');

export default {
  name: 'App',

  components: {
    Header
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