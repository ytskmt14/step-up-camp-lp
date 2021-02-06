<template>
  <v-col
    class="joinus-column"
    :style="colStyle"
    xl="3"
    md="3"
    sm="6"
    cols="12"
  >
    <v-row class="joinus-column-wrapper">
      <v-col cols="12" class="icon-space">
        <v-icon color="white" class="icon" :size="iconSize">
          {{ icon }}
        </v-icon>
      </v-col>
      <v-col cols="12">
        <slot name="title"></slot>
      </v-col>
      <v-col cols="12" class="joinus-column-text">
        <slot name="description"></slot>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
    props: {
        colStyle: {
            type: String,
        },
        icon: {
            type: String,
            require: true,
        },
        iconSize: {
            type: String,
            require: true,
        }
    }
}
</script>

<style scoped>
.joinus-column {
  text-align: center;
  color: white;
}
.joinus-column-wrapper .col {
  max-width: 300px;
  margin: 0 auto 0 auto;
}
.joinus-column-wrapper {
  height: 430px;
}
.joinus-column-text {
  height: 50%;
  word-wrap: anywhere;
  text-align: left;
}
.icon-space {
  height: 180px;
}
.icon {
  top: 50%;
}
</style>