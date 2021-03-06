<template>
  <section id="joinUs">
    <SectionHeader class="mb-5" :title="title" :subTitle="subTitle" />
    <v-row class="text-center">
      <v-col>
        <div class="text-h5 bold mb-10">{{ headingText }}</div>
      </v-col>
    </v-row>
    <v-row>
      <JoinUsContents
      >
      </JoinUsContents>
      <JoinUsContents
        icon="mdi-human-male-male"
        iconSize="5rem"
        colStyle="background: #E6B660;"
      >
        <template v-slot:title>仲間がほしい</template>
        <template v-slot:description>
          何かにチャレンジしようとするとき、<br/>
          こんな経験はありませんか？<br/>
          「長続きしない」<br/>
          「やり方がわからない」<br/>
          私たちと一緒にやりませんか？
        </template>
      </JoinUsContents>
      <JoinUsContents
        icon="mdi-wrench"
        iconSize="5rem"
        style="background:#25B7C0"
      >
        <template v-slot:title>ものづくりをしたい</template>
        <template v-slot:description>
          ものづくり、楽しいですよね。<br/>
          とにかく手を動かして、<br/>
          よりよいものを作りませんか？<br/>
          最初からできる人なんていません。<br/>
          ちょっとずつ、コツコツと。
        </template>
      </JoinUsContents>
      <JoinUsContents
        icon="mdi-book-open-blank-variant"
        iconSize="5rem"
        colStyle="background:#091933;"
      >
        <template v-slot:title>最新技術を学びたい</template>
        <template v-slot:description>
          新しいものは、わくわくします。<br/>
          でも、なかなか手を出せない、<br/>
          そんなことありませんか？<br/>
          ステキャンならできます。<br/>
          みんなでわくわくしましょう。<br/>
        </template>
      </JoinUsContents>
    </v-row>
  </section>
</template>
<script>
const SectionHeader = () => import(/* webpackChunkName: "SectionHeader" */ '../module/SectionHeader.vue');
const JoinUsContents = () => import(/* webpackChunkName: "JoinUsContents" */ '../module/JoinUsContents.vue');

export default {
  components: {
    SectionHeader,
    JoinUsContents,
  },
  data () {
    return {
      title: "JOIN US",
      subTitle: "メンバー募集",
      headingText: "ステキャンはメンバーを募集しています。",
    };
  },
};
</script>
<style scoped>
.joinus-column:first-child {
  background-image: url('~@/assets/joinus_column_img.png');
}
</style>