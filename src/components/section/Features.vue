<template>
  <div id="features" class="section">
    <v-container>
      <SectionHeader class="mb-5" :title="title" :subTitle="subTitle"/>
      <FeaturesContent bgColor="#dfa84e">
        <template v-slot:overview>
          <FeaturesContentOverview :feature="'feature1'" />
        </template>
        <template v-slot:description>
          <FeaturesContentDescription color="#dfa84e" :title="'特徴①'" :description="'説明文'"/>
        </template>
      </FeaturesContent>
      <FeaturesContent bgColor="#3caab2">
        <template v-slot:overview>
          <FeaturesContentOverview :feature="'feature2'" />
        </template>
        <template v-slot:description>
          <FeaturesContentDescription color="#3caab2" :title="'特徴②'" :description="'説明文'"/>
        </template>
      </FeaturesContent>
      <FeaturesContent bgColor="#0a1326">
        <template v-slot:overview>
          <FeaturesContentOverview :feature="'feature3'" />
        </template>
        <template v-slot:description>
          <FeaturesContentDescription color="#0a1326" :title="'特徴③'" :description="'説明文'"/>
        </template>
      </FeaturesContent>
    </v-container>
  </div>
</template>

<script>
const SectionHeader = () => import(/** webpackChunkName: "SectionHeader" */ '../module/SectionHeader.vue');
const FeaturesContent = () => import(/** webpackChunkName: "FeaturesContent" */ '../module/FeaturesContent.vue');
const FeaturesContentOverview = () => import(/** webpackChunkName: "FeaturesContentOverView" */ '../module/FeaturesContentOverview.vue');
const FeaturesContentDescription = () => import(/** webpackChunkName: "FeaturesContentDescription" */ '../module/FeaturesContentDescription.vue');

export default {
  components: {
    SectionHeader,
    FeaturesContent,
    FeaturesContentOverview,
    FeaturesContentDescription,
  },
  data () {
    return {
      title: "FEATURES",
      subTitle: "特徴紹介",
    }
  }
}
</script>