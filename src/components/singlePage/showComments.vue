<template>
  <v-container>
    <v-card color="#1a1d22" dark flat>
      <v-container>
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-card v-else :key="item.title" color="#1a1d22" dark flat>
            <v-col cols="6">
              <v-row>
                <v-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-avatar>
                <v-card-title>{{item.title}}</v-card-title>
              </v-row>
            </v-col>
            <v-card-subtitle>{{item.subtitle}}</v-card-subtitle>
            <v-col cols="12" class="d-flex justify-end">
                    <!-- <v-btn color="deep-purple acce nt-4" v-on="on">پاسخ</v-btn> -->
            </v-col>

            <!-- <v-container >
             <v-row v-for="child in items " :key="child">
           
              <v-col cols="12" >
                <v-card color="#1a1d22" dark  >{{child.id}}</v-card>
              </v-col>
             </v-row>
            </v-container>-->
          </v-card>
        </template>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      items: [
        { header: "اخرین نظرات" },
        {
          id: "1",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "محمد",
          subtitle:
            "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        { divider: true, inset: true },
        {
          id: "2",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "میلاد",
          subtitle:
            "to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend.",
          children: [
            { title: "1", parent: "2" },
            { title: "2", parent: "2" }
          ]
        },
        { divider: true, inset: true },
        {
          id: "3",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "علی",
          subtitle:
            " &mdash; Do you have Paris recommendations? Have you ever been?"
        },
        { divider: true, inset: true },
        {
          id: "4",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "محسن",
          subtitle:
            " &mdash; Have any ideas about what we should get Heidi for her birthday?"
        },
        { divider: true, inset: true },
        {
          id: "5",
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "داریوش",
          subtitle:
            " &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
        }
      ]
    };
  }
};
</script>

<style>
</style>