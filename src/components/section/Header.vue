<template>
  <section id="header">
    <v-app-bar elevate-on-scroll app color="gray darken-4" dark>
      <v-btn href="#top" text v-smooth-scroll="{ duration: 1000, offset: -75 }">
        {{ headerTitle }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        class="text-center hidden-sm-and-down"
        text
        tile
        v-for="(section, index) in sectionList"
        :key="index"
        :href="section.id"
        v-smooth-scroll="{ duration: 1000, offset: -75 }"
      >
        {{ section.name }}
      </v-btn>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <!-- ↓↓↓↓ ナビゲーションドロワー ↓↓↓↓ -->
    <v-navigation-drawer dark v-model="drawer" temporary right>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ navigationTitle }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          v-for="(section, index) in sectionList"
          :key="index"
          :href="section.id"
          v-smooth-scroll="{ duration: 1000, offset: -75 }"
          @click="drawer = !drawer"
        >
          <v-list-item-icon>
            <v-icon>{{ section.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              >{{ section.name }} - {{ section.subName }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ↑↑↑↑ ナビゲーションドロワー ↑↑↑↑ -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      headerTitle: "STEP UP CAMP",
      navigationTitle: "NAVIGATION",
      sectionList: [
        {
          name: "About",
          subName: "ステキャンについて",
          id: "#about",
          icon: "mdi-alpha-a-circle",
        },
        {
          name: "Works",
          subName: "実績紹介",
          id: "#works",
          icon: "mdi-alpha-w-circle",
        },
        {
          name: "Features",
          subName: "特徴紹介 ",
          id: "#features",
          icon: "mdi-alpha-f-circle",
        },
        {
          name: "JoinUs",
          subName: "メンバー募集",
          id: "#joinUs",
          icon: "mdi-alpha-j-circle",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-navigation-drawer {
  z-index: 99;
  position: fixed;
}
</style>