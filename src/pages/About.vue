<template>
  <section id="about">
    <!-- About Section表示エリア -->
    <SectionHeader title="About" subTitle="ステキャンについて" />
    <AboutSection />

    <!-- Features Section表示エリア -->
    <SectionHeader class="mb-5" title="Features" subTitle="特徴紹介" />
    <FeaturesSection />
  </section>
</template>

<script>
const SectionHeader = () =>
  import(
    /* webpackChunkName: "SectionHeader" */ "../components/molecules/SectionHeader"
  );

const AboutSection = () =>
  import(
    /* webpackChunkName: "AboutSection" */ "../components/organisms/AboutSection"
  );

const FeaturesSection = () =>
  import(
    /* webpackChunkName: "FeaturesSection" */ "../components/organisms/FeaturesSection"
  );

export default {
  components: {
    SectionHeader,
    AboutSection,
    FeaturesSection,
  },
};
</script>
