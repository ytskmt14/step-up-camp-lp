<template>
  <v-row
    justify="center"
    align="start"
    class="mt-5"
  >
    <v-col
      align="start"
      xs="4"
      cols="12"
    >
      <div class="text-center text-h4 font-weight-bold">
        {{ title }}
      </div>
      <div class="text-center text-h7 ">
        {{ subTitle }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
}
</script>