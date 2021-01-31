<template>
  <section id="header" style="width: 100%">
    <v-row>
      <v-col md="4" justify="center">
        <v-btn
          href="#top"
          text
          v-smooth-scroll="{ duration: 1000, offset: -75 }"
        >
          Step up camp
        </v-btn>
      </v-col>
      <v-spacer></v-spacer>
      <v-col md="2" align-self="center">
        <a
          class="text-center"
          v-for="(section, index) in sectionList"
          :key="index"
          :href="section.id"
          v-smooth-scroll="{ duration: 1000, offset: -75 }"
        >
          {{ section.name }}
        </a>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data () {
    return {
      sectionList: [
        {
          name: "About",
          id: "#about"
        },
        {
          name: "Works",
          id: "#works"
        },
        {
          name: "Features",
          id: "#features"
        },
        {
          name: "JoinUs",
          id: "#joinUs"
        },
      ]
    }
  }
}
</script>

<style scoped>
a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  vertical-align: middle;
}
</style>