<template>
  <v-footer dark padless class="mt-4">
    <v-card class="flex" flat tile>
      <v-card-text class="py-2 white--text text-center">
        {{ thisYear() }} — <strong>step-up camp</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  methods: {
    thisYear() {
      return new Date().getFullYear();
    }
  }
}
</script>