<template>
  <section id="about" class="section">
    <SectionHeader :title="title" :subTitle="subTitle" />
    <v-row class="mt-5" justify="center">
      <v-col cols="12" class="text-center">
        ステキャンとは、ステップアップキャンプの略です。<br />
        いちエンジニアとして、技術を楽しんでいく場所であり、<br />
        互いに情報を共有することで、ひとつずつできること・わかることを増やしていける場所です。
      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center">
      <v-col md="3">
        <v-card height="100%">
          <v-card-title> 2019.10 ステキャン発足 </v-card-title>
          <v-card-text>
            普段勉強していることをインプットするだけでなく、アウトプットする場所を作りたい！<br />
            そんな気持ちから有志を募ってスタートしました。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="3">
        <v-card height="100%">
          <v-card-title> 2019.10 ~ 2020.12 社内勉強会開催 </v-card-title>
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
      </v-col>
      <v-col md="3">
        <v-card height="100%">
          <v-card-title> 2021.01 ~ モノづくりを楽しもう！！ </v-card-title>
          <v-card-text>
            定期的に情報発信をすることも大事なことだと思う一方で、<br />
            私たちはやはりエンジニア、何かを作ることが楽しくてしょうがない。<br />
            その原点に立ち返り、何かを作る →
            作ったものをお披露目するというスタンスで活動していくことを決めました。<br />
            その第一歩としてこのwebページを作成しました。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */ '../module/SectionHeader.vue');

export default {
  components: {
    SectionHeader
  },
  data () {
    return {
      title: "About",
      subTitle: "ステキャンについて",
      pastThemeList: [
        "情報セキュリティきほんの「き」",
        "RUBY ON RAILS!!",
        "生産性の向上ってどういうこと？",
        "Slack活用術",
        "Django入門",
        "etc...",
      ],
      history: [
        {

        }
      ]
    }
  }
}
</script>

<style scoped>
.about-list {
  list-style: none;
  text-indent: -1.5em;
}
</style>