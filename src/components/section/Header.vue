<template>
  <section id="header">
    <v-app-bar elevate-on-scroll app color="gray darken-4" dark>
      <v-toolbar-items>
        <v-btn text :to="{name: 'top'}">
          {{ headerTitle }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          class="text-center hidden-sm-and-down"
          text
          v-for="(section, index) in sectionList"
          :key="index"
          :to="{name: section.link}"
        >
          {{ section.name }}
        </v-btn>
      </v-toolbar-items>
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
          name: "Top",
          subName: "トップページ",
          icon: "mdi-alpha-w-circle",
          link: "top",
        },
        {
          name: "About",
          subName: "ステキャンについて",
          icon: "mdi-alpha-a-circle",
          link: "about",
        },

        {
          name: "Contact",
          subName: "お問い合わせ ",
          icon: "mdi-alpha-f-circle",
          link: "contact",
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