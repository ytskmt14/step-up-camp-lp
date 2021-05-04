<template>
  <v-row>
    <v-col xs="12" md="6" cols="12" class="feature-content-area" :style="bgStyle">
      <v-row no-gutters>
        <v-col md="8" offset-md="4" >
          <slot name="overview"></slot>
        </v-col>
      </v-row>
    </v-col>
    <v-col xs="12" md="6" cols="12" class="feature-content-area" :style="bgStyle">
      <v-row no-gutters>
        <v-col md="8">
          <slot name="description"></slot>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "white"
    }
  },
  data () {
    return {
      bgStyle: 'background-color: ' + this.bgColor + ';'
    }
  }
}
</script>

<style scoped>
.feature-content-area {
  color: white;
}
</style>