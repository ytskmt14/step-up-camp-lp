<template>
  <section id="joinUs" class="section">
    <v-container fluid>
      <SectionHeader class="mb-5" :title="title" :subTitle="subTitle" />
      <v-row class="text-center">
        <v-col>
          <div class="text-h5 bold mb-4">{{ headingText }}</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.subheading"
          class="joinus-column"
          :style="item.style"
           >
          <v-row class="joinus-column-wrapper" :style="item.substyle">
            <v-col cols="12" class="icon-space">
              <v-icon color="white" class="icon" :size="item.size">
                {{ item.icon }}
              </v-icon>
            </v-col>
            <v-col cols="12">
              {{ item.subheading }}
            </v-col>
            <v-col class="joinus-column-text">{{ item.text }} </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import SectionHeader from "../module/SectionHeader.vue";

export default {
  components: {
    SectionHeader,
  },
  data() {
    return {
      title: "JOIN US",
      subTitle: "メンバー募集",
      headingText: "ステキャンはメンバーを募集しています。",
      items: [
        {
          subheading: "TEXT",
          text: "111111111111111111111111111",
          icon: "mdi-home",
          size: "5rem",
          style: "background:#888;margin-left:auto;",
          substyle: "margin-left:auto;",
          addclass: "bgimg",
        },
        {
          subheading: "仲間が欲しい",
          text: "222222222222222222222222222222",
          icon: "mdi-human-male-male",
          size: "5rem",
          style: "background:#E6B660;max-width: 240px;",
        },
        {
          subheading: "ものづくりをしたい",
          text: "3333333333333333333333333333333",
          icon: "mdi-wrench",
          size: "5rem",
          style: "background:#25B7C0;max-width: 240px;",
        },
        {
          subheading: "最新技術を学ぶ",
          text: "44444444444444444444444444444444",
          icon: "mdi-book-open-blank-variant",
          size: "5rem",
          style: "background:#091933;margin-right:auto;",
        },
      ],
    };
  },

};
</script>
<style scoped>
.joinus-column {
  text-align: center;
  color: white;
}
.joinus-column-wrapper.div:first-child {
  margin-left: auto;
}
.joinus-column-wrapper {
  max-width: 240px;
  height:430px;
}
.joinus-column-text {
  height: 50%;
  word-wrap: anywhere;
  text-align: left;
}
.icon-space {
  height: 180px;
}
.icon {
  top: 50%;
}
</style>