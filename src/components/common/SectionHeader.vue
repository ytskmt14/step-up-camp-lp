<template>
  <v-row justify="center" align="start">
    <v-col align="start" xs="4" cols="12">
      <div class="text-center text-h2 font-weight-bold">
        {{ title }}
      </div>
      <div class="text-center text-h6 mb-3">
        {{ subTitle }}
      </div>
      <div class="v-responsive mx-auto mb-8" style="width: 72px">
        <div class="v-responsive__content">
          <hr
            role="separator"
            aria-orientation="horizontal"
            class="mb-1 v-divider theme--light"
          />
          <hr
            role="separator"
            aria-orientation="horizontal"
            class="v-divider theme--light"
          />
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
};
</script>