<template>
  <v-container>
    <v-row>
      <v-col v-for="feature in featureList" :key="feature.id" cols="12" md="4">
        <v-card class="py-12 px-4" color="grey lighten-5" flat :height="featureCardHeight">
          <v-theme-provider dark>
            <div style="text-align:center">
              <v-avatar color="primary" size="88">
                <v-icon large >{{feature.icon}}</v-icon>
              </v-avatar>
            </div>
          </v-theme-provider>
          <v-card-title class="justify-center font-weight-black text-uppercase">{{feature.shortDescription}}</v-card-title>
          <v-card-text class="subtitle-1">{{feature.description}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "white",
    },
  }, 
  data() {
    return {
      featureList: [
        {
          shortDescription: "好きなこと、好きなだけ",
          description:
            "普段のお仕事だと、ミスや失敗は怖いもの。でもここは趣味の世界。ミスや失敗なんていくらしても大丈夫。全部ネタにしてしまいましょう！悩んでやらないよりもまず行動！",
          icon:"mdi-lightbulb-on-outline"
        },
        {
          shortDescription: "純粋に、貪欲に",
          description:
            "仕事だから覚える、出来るようになる。それ以外の技術も知識も楽しいものばかり。ひとりのエンジニアとして技術を楽しもう。",
            icon:"mdi-human-handsup"
        },
        {
          shortDescription: "わからないは、あたりまえ",
          description:
            "はじめての挑戦は「わからない」「できない」のがあたりまえ。ステキャンは挑戦者を応援し「わからない」「できない」をみんなで共有・解決できる環境です。",
            icon:"mdi-account-question"
        },
      ],
    };
  },   computed: {
      featureCardHeight: function() {
        var height
          switch (this.$vuetify.breakpoint.name) {

          case 'md': 
          height = "450";
          break;
          case 'lg': 
          height = "400";
          break;
          case 'xl': 
          height = "380";
          break;
        }
        return height
      }
    }
};
</script>

<style scoped>
.feature-content-area {
  color: white;
}
</style>