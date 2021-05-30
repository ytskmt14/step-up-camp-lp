<template>
  <section id="top">
    <!-- TOP画像表示エリア -->
    <v-row align-content="center" justify="center">
      <v-col align-self="center" cols="10">
        <TopImg />
      </v-col>
    </v-row>

    <!-- Work セクション表示エリア -->
    <SectionHeader
      class="mb-5"
      :title="sectionTitle"
      :subTitle="sectionSubTitle"
    />
      <WorkSection />
  </section>
</template>

<script>
const SectionHeader = () =>
  import(
    /* webpackChunkName: "SectionHeader" */ "../components/molecules/SectionHeader"
  );
const TopImg = () =>
  import(
    /* webpackChunkName: "TopContentImg" */ "../components/molecules/TopContentImg"
  );

const WorkSection = () =>
  import(
    /* webpackChunkName: "WorkSection" */ "../components/organisms/WorkSection"
  );

export default {
  components: {
    SectionHeader,
    TopImg,
    WorkSection
  },
};
</script>

