<template>
  <v-main>
    <section id="about" class="grey lighten-3 pt-6">
      <SectionHeader title="About" subTitle="ステキャンについて" />
      <p class="text-center">
        ステキャンとは、ステップアップキャンプの略です。<br />
        いちエンジニアとして、技術を楽しんでいく場所であり、<br />
        互いに情報を共有することで、ひとつずつできること・わかることを増やしていける場所です。
      </p>
      <div class="py-4"></div>
    </section>
    <section>
      <div class="text-center text-h5 mb-3 mt-3">ステキャンの軌跡</div>
      <v-timeline class="mx-auto" style="max-width: 860px;">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2
              :class="`headline font-weight-light mb-4 ${year.color}--text`"
            >{{year.title}}</h2>
            <div v-for="(text,j) in year.textLine"
            :key="j">
              {{text}}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </section>
    <section id="features" class="grey lighten-3">
      <div class="py-12"></div>
      <SectionHeader class="mb-5" title="Features" subTitle="特徴紹介" />
      <FeaturesContent />
    </section>
  </v-main>
</template>

<script>
const SectionHeader = () =>
  import(
    /* webpackChunkName: "SectionHeader" */ "../components/common/SectionHeader"
  );
const FeaturesContent = () =>
  import(
    /* webpackChunkName: "FeaturesContent" */ "../components/about/FeaturesContent"
  );

export default {
  components: {
    SectionHeader,
    FeaturesContent,
  },
  data() {
    return {
      years: [
        {
          color: "cyan",
          year: "2019.10",
          title:"ステキャン発足",
          textLine: ["普段勉強していることをインプットするだけでなく、アウトプットする場所を作りたい！そんな気持ちから有志を募ってスタートしました。"],
        },
        {
          color: "green",
          year: "2019.10 ~ 2020.12",
          title:"社内勉強会開催",
          textLine: [
          "情報セキュリティきほんの「き」",
          "RUBY ON RAILS!",
          "生産性の向上ってどういうこと？",
          "Slack活用術",
          "Django入門",
          "etc..."
          ],
          
        },
        {
          color: "pink",
          year: "2021.01 ~",
          title:"モノづくりを楽しもう！！",
          textLine: ["定期的に情報発信をすることも大事なことだと思う一方で、私たちはやはりエンジニア、何かを作ることが楽しくてしょうがない。その原点に立ち返り、何かを作る → 作ったものをお披露目するというスタンスで活動していくことを決めました。その第一歩としてこのwebページを作成しました。"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-list {
  list-style: none;
  text-indent: -1.5em;
}
</style>