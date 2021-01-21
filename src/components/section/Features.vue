<template>
  <div id="features" class="section">
    <v-container>
      <SectionHeader class="mb-5" :title="title" :subTitle="subTitle"/>
      <FeaturesContent bgColor="#dfa84e">
        <template v-slot:leftContent>
          leftContent1
        </template>
        <template v-slot:rightContent>
          rightContent1
        </template>
      </FeaturesContent>
      <FeaturesContent bgColor="#3caab2">
        <template v-slot:leftContent>
          leftContent2
        </template>
        <template v-slot:rightContent>
          rightContent2
        </template>
      </FeaturesContent>
      <FeaturesContent bgColor="#0a1326">
        <template v-slot:leftContent>
          leftContent3
        </template>
        <template v-slot:rightContent>
          rightContent3
        </template>
      </FeaturesContent>
    </v-container>
  </div>
</template>

<script>
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */ '../module/SectionHeader.vue');
const FeaturesContent = () => import(/** webpackChunkName: "FeaturesContent" */ '../module/FeaturesContent.vue');

export default {
  components: {
    SectionHeader,
    FeaturesContent,
  },
  data () {
    return {
      title: "FEATURES",
      subTitle: "特徴紹介",
    }
  }
}
</script>