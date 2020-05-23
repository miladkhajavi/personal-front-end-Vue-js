<template>
    <v-container>
        <v-toolbar light color="#d7d2cc" class="searchBox">
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-2"
            flat
            allow-overflow
            hide-no-data
            hide-details
            background-color="#d7d2cc"
            label="دنبال چی میگردی شیطون؟"
            solo-inverted
          ></v-autocomplete>

          <v-toolbar-title>
            <v-icon>mdi-search-web</v-icon>
          </v-toolbar-title>
        </v-toolbar>
      </v-container>
</template>

<script>
export default {
data:()=> ({
  loading: false,
    items: [],
    search: null,
    select: null,
    states: ["تهران", "اسلامشهر", "کرج"],
 
}),
watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      // Simulated ajax query
      // setTimeout(() => {
      this.items = this.states.filter(e => {
        return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
      });
      this.loading = false;
      // }, 500)
    }
  },
}
</script>

<style>

</style>