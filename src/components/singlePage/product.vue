<template>
  <v-container>
    <v-row>
      <v-col lg="8" md="8" sm="12" xs="12">
        <v-card color="#1a1d22" flat>
          <v-img
            src="../../assets/1102010.jpg"
            class="white--text align-end imageSingleProduct"
            height="200px"
            transition="fab-transition"
          >
            <!-- <v-card-title v-text=""></v-card-title> -->
            <v-card-title>
              {{singleInformation.item.viewCount}}
              <v-icon color="white" left>mdi-eye</v-icon>
            </v-card-title>
          </v-img>
          <v-spacer></v-spacer>

          <v-card-actions style="overflow:hidden;">
            <v-row justify="align-start">
              <v-col cols="5" sm="8" md="8">
                <v-chip class="ma-2" color="pink" label text-color="white">
                  برچسب
                  <v-icon>mdi-label</v-icon>
                </v-chip>
                <!-- <v-card elevation="10" class="py-4 px-1"> -->
                <v-chip-group multiple dark active-class="primary--text">
                  <v-chip v-for="tag in 2" :key="tag">{{singleInformation.item.tags}}</v-chip>
                </v-chip-group>
                <!-- </v-card> -->
              </v-col>
            </v-row>

            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- 2 -->
      <v-col lg="4" md="4" sm="12" xs="12">
        <v-card color="#1a1d22" flat dark>
          <v-card-title>{{singleInformation.item.title}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">4.0 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1" v-if="singleInformation.item.category">{{singleInformation.item.category.name}}</div>
            <div class="my-4 subtitle-1" v-if="!singleInformation.item.category">{{singleInformation.item.type}}</div>

            <div>{{singleInformation.item.body}}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-row>
            <v-col cols="8">
              <v-card-title>{{singleInformation.item.price}} تومان</v-card-title>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="counter"
                type="number"
                label="تعداد"
                small
                append-outer-icon="mdi-plus"
                @click:append-outer="increment"
                prepend-icon="mdi-minus"
                @click:prepend="decrement"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-card-text>
            <v-btn color="deep-purple accent-4 white--text" v-on:click="addPToCart(singleInformation.item._id)">
              <span>افزودن به سبد خرید</span>
              <v-icon right>mdi-cart</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="clearfix"></div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    increment() {
      this.counter = parseInt(this.counter, 10) + 1;
    },
    decrement() {
      this.counter = parseInt(this.counter, 10) - 1;
    },
    addPToCart(id){
      const order ={
        product:id,
        count:this.counter
      }
      this.$store.dispatch("addProductToCart",order)
    }
  },
  computed: {
    singleInformation() {
      return this.$store.getters.getSingle;
    }
  },
  watch: {
    $route() {
      this.$store.dispatch("singleProductFromServer", {
        id: this.$route.params.id
      });
    }
  },
  created() {
    this.$store.dispatch("singleProductFromServer", {
      id: this.$route.params.id
    });
  }
};
</script>

<style>
</style>