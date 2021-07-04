<template>
  <div>
    <v-theme-provider dark>
      <div>
        <v-avatar color="primary" size="88">
          <v-icon large></v-icon>
        </v-avatar>
      </div>
    </v-theme-provider>
    <v-card-title class="justify-center font-weight-black text-uppercase">{{
      shortDescription
    }}</v-card-title>
  </div>
</template>

<script>
export default {
  props: {
    shortDescription: {
      type: String,
      default: "Feature",
    },
  },
};
</script>