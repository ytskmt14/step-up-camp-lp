<template>
  <div>
    <v-app-bar height="100" app color="gray darken-4" dark>
      
        <router-link :style="$vuetify.breakpoint.smAndDown ? 'width:100px'  : 'width:100px;margin-left:60px'" to="/">
          <v-img
            src="@/assets/title.svg"
            contain
            height="65"
          ></v-img></router-link
      >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          class="text-center hidden-sm-and-down"
          text
          v-for="section in sectionList"
          :key="section.name"
          :to="section.link"
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
          v-for="section in sectionList"
          :key="section.name"
          :to="section.link"
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
  </div>
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
          icon: "mdi-arrow-up-bold-outline",
          link: "/",
        },
        {
          name: "About",
          subName: "ステキャンについて",
          icon: "mdi-star",
          link: "about",
        },

        {
          name: "Contact",
          subName: "お問い合わせ ",
          icon: "mdi-email",
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
.v-responsive__content .v-app-bar-title__content{
  width: 140px;
}

</style>