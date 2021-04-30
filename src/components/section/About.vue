<template>
  <section id="about">
    <SectionHeader title="About" subTitle="ステキャンについて" />
    <v-row class="mt-5" justify="center">
      <v-col cols="12" class="text-center">
        ステキャンとは、ステップアップキャンプの略です。<br />
        いちエンジニアとして、技術を楽しんでいく場所であり、<br />
        互いに情報を共有することで、ひとつずつできること・わかることを増やしていける場所です。
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col cols="10" offset="1">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item>
            <v-card class="d-flex flex-column">
              <v-card-title>2019.10 <br />ステキャン発足</v-card-title>
              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                普段勉強していることをインプットするだけでなく、アウトプットする場所を作りたい！<br />
                そんな気持ちから有志を募ってスタートしました。
              </v-card-text>

              <v-dialog v-else>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="primary">
                    Read More..
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>2019.10 ステキャン発足</v-card-title>
                  <v-card-text>
                    普段勉強していることをインプットするだけでなく、アウトプットする場所を作りたい！<br />
                    そんな気持ちから有志を募ってスタートしました。
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card>
          </v-timeline-item>
          <v-timeline-item>
            <v-card class="d-flex flex-column">
              <v-card-title>2019.10 ~ 2020.12<br />社内勉強会開催</v-card-title>
              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                毎月１回のペースで、普段勉強していることや興味のあることをみんなと共有しました。<br />
                ビジネスよりのことから言語のことまで、様々なテーマがありました。
                <ul>
                  <li
                    class="about-list"
                    v-for="(pastTheme, index) in pastThemeList"
                    :key="index"
                  >
                    {{ pastTheme }}
                  </li>
                </ul>
              </v-card-text>
              <v-dialog v-else>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="primary">
                    Read More..
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>2019.10 ~ 2020.12 社内勉強会開催</v-card-title>
                  <v-card-text>
                    毎月１回のペースで、普段勉強していることや興味のあることをみんなと共有しました。<br />
                    ビジネスよりのことから言語のことまで、様々なテーマがありました。
                    <ul>
                      <li
                        class="about-list"
                        v-for="(pastTheme, index) in pastThemeList"
                        :key="index"
                      >
                        {{ pastTheme }}
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card>
          </v-timeline-item>
          <v-timeline-item>
            <v-card class="d-flex flex-column">
              <v-card-title>
                2021.01 ~<br />モノづくりを楽しもう！！
              </v-card-title>
              <v-card-text v-if="$vuetify.breakpoint.mdAndUp">
                定期的に情報発信をすることも大事なことだと思う一方で、<br />
                私たちはやはりエンジニア、何かを作ることが楽しくてしょうがない。<br />
                その原点に立ち返り、何かを作る →
                作ったものをお披露目するというスタンスで活動していくことを決めました。<br />
                その第一歩としてこのwebページを作成しました。
              </v-card-text>
              <v-dialog v-else>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on" class="primary">
                    Read More..
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title
                    >2021.01 ~ モノづくりを楽しもう！！</v-card-title
                  >
                  <v-card-text>
                    定期的に情報発信をすることも大事なことだと思う一方で、<br />
                    私たちはやはりエンジニア、何かを作ることが楽しくてしょうがない。<br />
                    その原点に立ち返り、何かを作る →
                    作ったものをお披露目するというスタンスで活動していくことを決めました。<br />
                    その第一歩としてこのwebページを作成しました。
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <SectionHeader class="mb-5" title="Features" subTitle="特徴紹介" />
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
  </section>
</template>

<script>
const SectionHeader = () =>
  import(/* webpackChunkName: "SectionHeader" */ "../module/SectionHeader.vue");
const FeaturesContent = () =>
  import(
    /* webpackChunkName: "FeaturesContent" */ "../module/FeaturesContent.vue"
  );
const FeaturesContentOverview = () =>
  import(
    /* webpackChunkName: "FeaturesContentOverView" */ "../module/FeaturesContentOverview.vue"
  );
const FeaturesContentDescription = () =>
  import(
    /* webpackChunkName: "FeaturesContentDescription" */ "../module/FeaturesContentDescription.vue"
  );

export default {
  components: {
    SectionHeader,
    FeaturesContent,
    FeaturesContentOverview,
    FeaturesContentDescription,
  },
  data() {
    return {
      pastThemeList: [
        "情報セキュリティきほんの「き」",
        "RUBY ON RAILS!!",
        "生産性の向上ってどういうこと？",
        "Slack活用術",
        "Django入門",
        "etc...",
      ],
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

<style scoped>
.about-list {
  list-style: none;
  text-indent: -1.5em;
}
</style>