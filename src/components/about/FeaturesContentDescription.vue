<template>
  <v-card-text
    style="text-align: center"
    v-html="description"
    class="subtitle-1"
  >
  </v-card-text>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      require: true,
    },
  },
};
</script>