<template>
  <v-img class="align-center" src="@/assets/top-img.png">
    <div class="text-center top-img-text">
      <p class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-black">
        STEP UP CAMP
      </p>
      <v-row align-content="center" justify="center">
        <v-col cols="6" offset="3" sm="8" offset-sm="2">
          <vue-typed-js
            :strings="['enjoy', 'learn']"
            :loop="true"
            :smartBackspace="true"
          >
            <h2>Let's <span class="typing"></span> tech with us!!</h2>
          </vue-typed-js>
        </v-col>
      </v-row>
    </div>
  </v-img>
</template>

<style scoped>
.top-img-text {
  color: #f3f1f7;
}
</style>