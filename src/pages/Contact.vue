<template>
  <v-main>
    <section id="contact" class="pt-6">
      <SectionHeader class="mb-5" title="CONTACT" subTitle="お問い合わせ" />
      <div class="mx-auto text-center" style="max-width: 800px;">
        <p>
          「<Policy />」をご確認の上、よろしければ「送信」ボタンをクリックしてください。
        </p>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdO_2aASNoiFtU8URJBJ1BHud4TtBuwyhPpix-TAYPHfzSEjQ/viewform?embedded=true"
        width="100%"
        height="800"
        frameborder="0"
        >読み込んでいます…</iframe
      >
    </section>
  </v-main>
</template>
<script>
const SectionHeader = () =>
  import(
    /* webpackChunkName: "SectionHeader" */ "../components/common/SectionHeader"
  );
const Policy = () =>
  import(/* webpackChunkName: "SectionHeader" */ "../components/Policy");
export default {
  components: {
    SectionHeader,
    Policy,
  }
};
</script>
