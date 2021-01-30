<template>
  <div id="joinUs" class="section">
    <v-container>
      <SectionHeader :title="title" :subTitle="subTitle"/>
      <div class="text-h4 text-center mt-3">
        ステキャンはメンバーを募集しています。
      </div>
      <v-row class="mt-5" style="height: 350px;">
        <v-col md="4" class="content with-bgimg">
          <v-row no-gutters>
            <v-col md="6" offset-md="6">
              text
            </v-col>
          </v-row>
        </v-col>
        <v-col md="2" class="content" style="background-color: #dfa84e;">
          <div class="text-center">
            <v-icon size="100px" color="white">mdi-account-group</v-icon>
          </div>
        </v-col>
        <v-col md="2" class="content" style="background-color: #3caab2;">
          <div>
            aaa
          </div>
        </v-col>
        <v-col md="4" class="content" style="background-color: #0a1326;">
          <v-row no-gutters>
            <v-col md="6">
              text
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */'../module/SectionHeader')
export default {
  components: {
    SectionHeader
  },
  data() {
    return {
      title: "JOIN US",
      subTitle: "メンバー募集",
    }
  }
}
</script>

<style scoped>
.with-bgimg {
  background-image: url("~@/assets/join-us-content-bg.jpg");
  background-size: cover;
}
.content {
  height: 100%;
}
</style>