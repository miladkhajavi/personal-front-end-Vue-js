<template>
<div>
  <v-app-bar color="deep-purple accent-4" dark class="header">
    <v-toolbar-title>My files</v-toolbar-title>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-filter</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

   <v-navigation-drawer v-model="drawer" clipped mobile-break-point="70" fixed temporary right app>
      <v-list>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>

<style>
</style>