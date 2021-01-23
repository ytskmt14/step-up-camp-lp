<template>
  <div id="about" class="section">
    <v-container>
      <SectionHeader :title="title" :subTitle="subTitle"/>
      <v-row
        justify="center"
        align="start"
      >
        <v-col
          align="start"
          md="8"
        >
          <div class="mt-5 text-left text-body-2">
            <p>ステキャンとは、ステップアップキャンプの略称です。</p>
            <p>それぞれが興味のあることや勉強したことなどをみんなに共有していく場として、2019年10月からスタートしました。</p>
            <p>
              発表のテーマは、業務に関係あることでもないことでもなんでもOK！
              過去にはこんなテーマがありました。
            </p>
            <ul class="about-list">
              <li
                v-for="(pastTheme, index) in pastThemeList"
                :key="index"
              >
                {{ pastTheme }}
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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