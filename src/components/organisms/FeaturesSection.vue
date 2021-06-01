<template>
  <div>
    <FeaturesContent
      v-for="feature in featureList"
      :key="feature.id"
      :bgColor="feature.bgColor"
    >
      <template v-slot:overview>
        <FeaturesContentOverview :shortDescription="feature.shortDescription" />
      </template>
      <template v-slot:description>
        <FeaturesContentDescription
          :color="feature.bgColor"
          :description="feature.description"
        />
      </template>
    </FeaturesContent>
  </div>
</template>

<script>
const FeaturesContent = () =>
  import(
    /* webpackChunkName: "FeaturesContent" */ "../molecules/FeaturesContent"
  );
const FeaturesContentOverview = () =>
  import(
    /* webpackChunkName: "FeaturesContentOverView" */ "../molecules/FeaturesContentOverview"
  );
const FeaturesContentDescription = () =>
  import(
    /* webpackChunkName: "FeaturesContentDescription" */ "../molecules/FeaturesContentDescription"
  );
export default {
  components: {
    FeaturesContent,
    FeaturesContentOverview,
    FeaturesContentDescription,
  },
  data() {
    return {
      featureList: [
        {
          bgColor: "#dfa84e",
          shortDescription: "好きなこと、好きなだけ",
          description:
            "普段のお仕事だと、ミスや失敗は怖いもの。<br>でもここは趣味の世界。ミスや失敗なんていくらしても大丈夫。<br>全部ネタにしてしまいましょう！<br>悩んでやらないよりもまず行動！",
        },
        {
          bgColor: "#3caab2",
          shortDescription: "純粋に、貪欲に",
          description:
            "仕事だから覚える、出来るようになる。<br>それ以外の技術も知識も楽しいものばかり。<br>ひとりのエンジニアとして技術を楽しもう。",
        },
        {
          bgColor: "#0a1326",
          shortDescription: "わからないは、あたりまえ",
          description:
            "はじめての挑戦は「わからない」「できない」のがあたりまえ。<br>ステキャンは挑戦者を応援し「わからない」「できない」をみんなで共有・解決できる環境です。",
        },
      ],
    };
  },
};
</script>