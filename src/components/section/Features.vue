<template>
  <section id="features" class="section">
    <v-container>
      <SectionHeader class="mb-5" :title="title" :subTitle="subTitle"/>
      <FeaturesContent
        v-for="feature in featureList"
        :key="feature.id"
        :bgColor="feature.bgColor"
      >
        <template v-slot:overview>
          <FeaturesContentOverview
            :shortDescription="feature.shortDescription"
          />
        </template>
        <template v-slot:description>
          <FeaturesContentDescription
            :color="feature.bgColor"
            :shortDescription="feature.shortDescription"
            :description="feature.description"
          />
        </template>
      </FeaturesContent>
    </v-container>
  </section>
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
      featureList: [
        {
          bgColor: '#dfa84e',
          shortDescription: 'feature1',
          description: '説明文１',
        },
        {
          bgColor: '#3caab2',
          shortDescription: 'feature2',
          description: '説明文２',
        },
        {
          bgColor: '#0a1326',
          shortDescription: 'feature3',
          description: '説明文３',
        },
      ]
    }
  }
}
</script>