<template>
  <v-card
    flat
    :color="color"
  >
    <v-card-text>
      <p class="subtitle-1 font-weight-black white--text">
        {{ shortDescription }}
      </p>
      <p class="body-2 font-weight-bold white--text">
        {{ description }}
      </p>
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
    shortDescription: {
      type: String,
    },
    description: {
      type: String,
      require: true
    }
  }
}
</script>