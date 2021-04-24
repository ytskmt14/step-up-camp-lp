<template>
  <section id="top">
    <v-row align-content="center" justify="center">
      <v-col align-self="center" cols="10">
        <v-img class="align-center" src="../../assets/top-img.png">
          <div class="text-center top-text">
            <p class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black">
              STEP UP CAMP
            </p>
            <v-row align-content="center" justify="center">
              <v-col cols="6" offset="3" sm="8" offset-sm="2">
                <vue-typed-js
                  :strings="['enjoy', 'learn']"
                  :loop="true"
                  :smartBackspace="true"
                >
                  <h2>Let's <span class="typing"></span> tech with us!!</h2>
                </vue-typed-js>
              </v-col>
            </v-row>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <SectionHeader class="mb-5" :title="title" :subTitle="subTitle" />
    <v-sheet>
      <v-row>
        <v-col
          cols="12"
          xs="12"
          md="3"
          offset-md="2"
          :order="$vuetify.breakpoint.smAndDown ? 2 : 1"
        >
          <v-card flat style="height: 100%">
            <v-card-title>
              <v-row>
                <v-col cols="12">
                  <p
                    @click="windowOpen(work[model - 1].deliverableUrl)"
                    style="cursor: pointer"
                  >
                    {{ work[model - 1].title }}
                    <v-divider vertical></v-divider>
                    <v-icon
                      v-if="work[model - 1].githubUrl"
                      @click="windowOpen(work[model - 1].githubUrl)"
                    >
                      mdi-github
                    </v-icon>
                  </p>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text v-html="work[model - 1].text"></v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>使用技術</div>
              <div class="mt-2">
                <v-tooltip
                  bottom
                  v-for="techIcon in work[model - 1].techIcons"
                  :key="techIcon.id"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon large v-bind="attrs" v-on="on">
                      {{ techIcon.icon }}
                    </v-icon>
                  </template>
                  <span>{{ techIcon.tooltip }}</span>
                </v-tooltip>
              </div>
            </v-card-text>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          xs="12"
          md="5"
          :order="$vuetify.breakpoint.smAndDown ? 1 : 2"
        >
          <v-img :src="work[model - 1].imgPath" position="center" />
        </v-col>
      </v-row>
      <v-row>
        <v-col md="8" offset-md="2">
          <v-slide-group
            v-model="model"
            prev-icon="mdi-arrow-left-circle"
            next-icon="mdi-arrow-right-circle"
            show-arrows
          >
            <v-slide-item v-for="n in work.length" :key="n">
              <v-sheet class="ma-4">
                <v-img
                  contain
                  :src="work[n - 1].thumbImgPath"
                  max-height="175px;"
                  @click="onCardClick(n)"
                />
              </v-sheet>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-sheet>
  </section>
</template>

<script>
const SectionHeader = () =>
  import(/* webpackChunkName: "SectionHeader" */ "../module/SectionHeader.vue");

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      title: "WORKS",
      subTitle: "実績紹介",
      model: 1,
      work: [
        {
          id: 1,
          title: "ステキャン web",
          text:
            "ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",
          imgPath: require("@/assets/step-up-camp-lp.png"),
          thumbImgPath: require("@/assets/thumb-step-up-camp-lp.png"),
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
  methods: {
    onCardClick(n) {
      this.model = n;
    },
    windowOpen(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.top-text {
  color: #f3f1f7;
}
</style>