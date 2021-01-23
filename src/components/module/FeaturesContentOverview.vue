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
          align="center"
      >
        <v-banner
          color="white"
          tile
          outlined
        >
          {{ feature }}
        </v-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    feature: {
      type: String,
      default: "Feature",
    }
  }
}
</script>