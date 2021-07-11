<template>
  <v-main>
    <section id="top">
      <v-row no-gutters>
        <v-img :height="'calc(100vh - 100px)'" src="@/assets/top-img.png">
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col class="white--text text-center" cols="12" tag="h1">
                  <div
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-1 mb-2'  : 'display-2 mb-7',
                    ]"
                    class="font-weight-light"
                    >WELCOME TO</div>
             
                  <div
                    :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3 mb-2' : 'display-4 mb-7']"
                    class="font-weight-black"
                  >
                    STEP UP CAMP
                  </div>
                  <vue-typed-js
                    :strings="[
                      'Let\'s enjoy tech with us!!',
                      'Let\'s learn tech with us!!',
                    ]"
                    :loop="true"
                  >
                    <span :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-0' : 'display-2']"
                    class="typing font-weight-light"></span>
                  </vue-typed-js>
                  <v-btn 
                  :class="[
                      $vuetify.breakpoint.smAndDown ? 'display-3 mt-12' : 'display-4 mt-15']"
                    class="align-self-end "
                    fab
                    outlined
                    @click="$vuetify.goTo('#works')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>
    <section id="works">
      <div class="py-12"></div>
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
  </v-main>
</template>

<script>
const SectionHeader = () =>
  import(
    /* webpackChunkName: "SectionHeader" */ "../components/common/SectionHeader"
  );

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
          text: "ステキャンものづくりの第一歩！<br>ステキャンの紹介ページを作りました。<br>これからたくさんモノづくりをしていきます。",
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
.col {
  padding: 0px;
}
.container {
  padding: 0px;
}
.typed-element {
  display: inherit;
}
</style>