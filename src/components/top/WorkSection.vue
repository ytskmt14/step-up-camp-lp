<template>
  <div>
    <SectionHeader class="mb-5" title="WORKS" subTitle="実績紹介" />
    <v-row>
      <v-col cols="10" offset="1">
        <v-sheet>
          <v-row>
            <v-col
              v-for="work in works"
              :key="work.index"
              cols="12"
              sm="12"
              md="4"
            >
              <WorkContents :work="work" />
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const SectionHeader = () =>
  import(/* webpackChunkName: "SectionHeader" */ "../common/SectionHeader");

const WorkContents = () =>
  import(/* webpackChunkName: "WorkContents" */ "./WorkContents");
export default {
  components: {
    SectionHeader,
    WorkContents,
  },
  data() {
    return {
      works: [
        {
          title: "ステキャン web",
          text: "ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",
          imgPath: require("@/assets/step-up-camp-lp.png"),
          techIcons: [
            {
              icon: "mdi-language-html5",
              tooltip: "html",
            },
            {
              icon: "mdi-language-css3",
              tooltip: "css",
            },
            {
              icon: "mdi-vuejs",
              tooltip: "Vue.js",
            },
            {
              icon: "mdi-vuetify",
              tooltip: "Vuetify",
            },
            {
              icon: "mdi-git",
              tooltip: "git",
            },
          ],
          deliverableUrl: "https://step-up-camp-572f4.firebaseapp.com/",
          githubUrl: "https://github.com/ytskmt14/step-up-camp-lp",
        },
        {
          title: "ステキャン web",
          text: "ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",
          imgPath: require("@/assets/work1.jpg"),
          techIcons: [
            {
              icon: "mdi-language-html5",
              tooltip: "html",
            },
            {
              icon: "mdi-language-css3",
              tooltip: "css",
            },
            {
              icon: "mdi-vuejs",
              tooltip: "Vue.js",
            },
            {
              icon: "mdi-vuetify",
              tooltip: "Vuetify",
            },
            {
              icon: "mdi-git",
              tooltip: "git",
            },
          ],
          deliverableUrl: "https://step-up-camp-572f4.firebaseapp.com/",
          githubUrl: "https://github.com/ytskmt14/step-up-camp-lp",
        },
        {
          title: "ステキャン web",
          text: "ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",
          imgPath: require("@/assets/work2.jpg"),
          techIcons: [
            {
              icon: "mdi-language-html5",
              tooltip: "html",
            },
            {
              icon: "mdi-language-css3",
              tooltip: "css",
            },
            {
              icon: "mdi-vuejs",
              tooltip: "Vue.js",
            },
            {
              icon: "mdi-vuetify",
              tooltip: "Vuetify",
            },
            {
              icon: "mdi-git",
              tooltip: "git",
            },
          ],
          deliverableUrl: "https://step-up-camp-572f4.firebaseapp.com/",
          githubUrl: "https://github.com/ytskmt14/step-up-camp-lp",
        },
      ],
    };
  },
};
</script>