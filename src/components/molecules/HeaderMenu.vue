<template>
  <v-btn
    class="text-center hidden-sm-and-down"
    text
    :to="{ name: page.link }"
  >
    {{ page.name }}
  </v-btn>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
    }
  }
}
</script>