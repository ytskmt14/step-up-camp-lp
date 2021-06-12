<template>
  <v-container>
    <v-row>
      <v-col
          align="center"
          md="4"
          offset-md="4"
          class="pa-0"
      >
        <v-icon
        color="white"
        size="90px"
        >
          mdi-account-group
        </v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          align="center"
      >
        <v-banner
          color="white"
          single-line
          class="mt-6"
        >
          {{ shortDescription }}
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    shortDescription: {
      type: String,
      default: "Feature",
    }
  }
}
</script>