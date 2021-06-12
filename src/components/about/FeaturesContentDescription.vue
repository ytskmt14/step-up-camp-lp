<template>
  <v-card flat :color="color">
    <v-card-text>
      <p
        v-html="description"
        class="body-1 font-weight-bold white--text"
        style="line-height: 2em"
      ></p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "white",
    },
    description: {
      type: String,
      require: true
    }
  }
}
</script>