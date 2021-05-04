<template>
  <v-toolbar-items>
    <v-btn text :to="{ name: 'top' }">
      {{ headerTitle }}
    </v-btn>
  </v-toolbar-items>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: "STEP UP CAMP"
    }
  }
}
</script>