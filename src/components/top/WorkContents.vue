<template>
  <v-card>
    <v-img
      :src="work.imgPath"
    />
    <v-card-title>
      <span>{{ work.title }}</span>
      <v-divider vertical class="mx-3"></v-divider>
      <v-icon
        v-if="work.githubUrl"
        @click="windowOpen(work.githubUrl)"
      >
        mdi-github
      </v-icon>
    </v-card-title>
    <v-card-text>
      <div v-html="work.text"></div>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>使用技術</v-card-title>
    <v-card-text>
      <v-chip-group column>
        <v-chip
          v-for="techIcon in work.techIcons"
          :key="techIcon.index"
        >
          <v-tooltip
            bottom
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon large v-bind="attrs" v-on="on">
                {{ techIcon.icon }}
              </v-icon>
            </template>
            <span>{{ techIcon.tooltip }}</span>
          </v-tooltip>
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["work"],
  methods: {
    windowOpen(url) {
      window.open(url, "_blank")
    }
  }
}
</script>