<template>
  <div id="works" class="section">
    <SectionHeader class="mb-5" :title="title" :subTitle="subTitle" />
    <v-sheet>
      <v-row style="height: 400px;">
        <v-col md="3" offset-md="2" >
          <v-card flat style="height: 100%;">
            <v-card-title>
              {{ work[model - 1].title }}
            </v-card-title>
            <v-card-text>
              {{ work[model - 1].text }}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="5">
          <v-img
            :src="work[model - 1].imgPath"
            max-height="375px"
          />
        </v-col>
      </v-row>
      <v-row style="height: 200px;">
        <v-col md="8" offset-md="2">
          <v-slide-group v-model="model" show-arrows>
            <v-slide-item
              v-for="n in work.length"
              :key="n"
            >
              <v-sheet
                class="ma-4"
              >
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
  </div>
</template>

<script>
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */'../module/SectionHeader.vue')

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
          title: "sample title",
          text: "sample text.",
          imgPath: require("../../assets/work1.jpg"),
          thumbImgPath: require("../../assets/thumb-work1.jpg"),
        },
        {
          id: 2,
          title: "example title",
          text: "example text.",
          imgPath: require("../..//assets/work2.jpg"),
          thumbImgPath: require("../../assets/thumb-work2.jpg"),
        },
      ]
    }
  },
  methods: {
    onCardClick(n) {
      this.model = n;
    }
  }
}
</script>
