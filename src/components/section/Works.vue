<template>
  <section id="works">
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
                <v-col xs="11">
                  <p @click="windowOpen(work[model - 1].deliverableUrl)">
                    {{ work[model - 1].title }}
                  </p>
                </v-col>
                <v-col xs="1">
                  <v-icon
                    @click="windowOpen(work[model - 1].githubUrl)"
                  >
                    mdi-github
                  </v-icon>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text>
              {{ work[model - 1].text }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>使用技術</div>
              <div class="mt-2">
                <v-icon
                  v-for="techIcon in work[model - 1].techIcons"
                  :key="techIcon.id"
                  large
                >
                  {{ techIcon }}
                </v-icon>
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
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */'../module/SectionHeader.vue')

export default {
  components: {
    SectionHeader,
  },
  data () {
    return {
      title: "WORKS",
      subTitle: "実績紹介",
      model: 1,
      work: [
        {
          id: 1,
          title: "sample title",
          text: "sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.sample text.",
          imgPath: require("@/assets/work1.jpg"),
          thumbImgPath: require("@/assets/thumb-work1.jpg"),
          techIcons: ['mdi-language-html5', 'mdi-language-css3', 'mdi-vuejs', 'mdi-vuetify'],
          deliverableUrl: "https://github.com/ytskmt14",
          githubUrl: "https://github.com/ytskmt14/step-up-camp-lp",
        },
        {
          id: 2,
          title: "example title",
          text: "example text.",
          imgPath: require("@//assets/work2.jpg"),
          thumbImgPath: require("@/assets/thumb-work2.jpg"),
        },
        {
          id: 3,
          title: "sample title",
          text: "sample text.",
          imgPath: require("@/assets/work1.jpg"),
          thumbImgPath: require("@/assets/thumb-work1.jpg"),
        },
        {
          id: 4,
          title: "sample title",
          text: "sample text.",
          imgPath: require("@/assets/work2.jpg"),
          thumbImgPath: require("@/assets/thumb-work2.jpg"),
        },
        {
          id: 5,
          title: "sample title",
          text: "sample text.",
          imgPath: require("@/assets/work1.jpg"),
          thumbImgPath: require("@/assets/thumb-work1.jpg"),
        },
        {
          id: 6,
          title: "sample title",
          text: "sample text.",
          imgPath: require("@/assets/work2.jpg"),
          thumbImgPath: require("@/assets/thumb-work2.jpg"),
        },

      ]
    }
  },
  methods: {
    onCardClick (n) {
      this.model = n;
    },
    windowOpen (url) {
      window.open(url, '_blank');
    },
  },
}
</script>
