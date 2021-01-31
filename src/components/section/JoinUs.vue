<template>
  <section id="joinUs" class="section">
    <SectionHeader class="mb-5" :title="title" :subTitle="subTitle" />
    <v-row class="text-center">
      <v-col>
        <div class="text-h5 bold mb-10">{{ headingText }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.subHeading"
        class="joinus-column"
        :style="item.style"
        xl="3"
        md="3"
        sm="6"
        cols="12"
      >
        <v-row class="joinus-column-wrapper">
          <v-col cols="12" class="icon-space">
            <v-icon color="white" class="icon" :size="item.size">
              {{ item.icon }}
            </v-icon>
          </v-col>
          <v-col cols="12">
            {{ item.subHeading }}
          </v-col>
          <v-col cols="12" class="joinus-column-text">{{ item.text }} </v-col>
        </v-row>
      </v-col>
    </v-row>
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
          subHeading: "TEXT",
          text: "111111111111111111111111111\r\n22222222222222222",
          icon: "mdi-home",
          size: "5rem",
          style: {},
        },
        {
          subHeading: "仲間が欲しい",
          text: "222222222222222222222222222222",
          icon: "mdi-human-male-male",
          size: "5rem",
          style: { background: "#E6B660" },
        },
        {
          subHeading: "ものづくりをしたい",
          text: "3333333333333333333333333333333",
          icon: "mdi-wrench",
          size: "5rem",
          style: { background: "#25B7C0" },
        },
        {
          subHeading: "最新技術を学ぶ",
          text: "44444444444444444444444444444444",
          icon: "mdi-book-open-blank-variant",
          size: "5rem",
          style: { background: "#091933" },
        },
      ],
    };
  },
};
</script>
<style scoped>
.joinus-column:first-child {
  background: url("~@/assets/joinus_column_img.png");
}
.joinus-column {
  text-align: center;
  color: white;
}
.joinus-column-wrapper .col {
  max-width: 300px;
  margin: 0 auto 0 auto;
}
.joinus-column-wrapper {
  height: 430px;
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