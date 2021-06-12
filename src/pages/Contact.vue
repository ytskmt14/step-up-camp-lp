<template>
    <section id="contact">
        <SectionHeader class="mb-5" title="CONTACT" subTitle="お問い合わせ" />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdO_2aASNoiFtU8URJBJ1BHud4TtBuwyhPpix-TAYPHfzSEjQ/viewform?embedded=true" width="100%" height="800" frameborder="0" >読み込んでいます…</iframe>
  </section>
</template>
<script>
const SectionHeader = () =>
  import(/* webpackChunkName: "SectionHeader" */ "../components/common/SectionHeader");
export default {
    components: {
        SectionHeader,
    },
    data() {
        return {
            
        };
    },
    methods: {
    },
};
</script>
<style scoped>
</style>