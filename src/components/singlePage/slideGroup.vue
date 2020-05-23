<template>
  <v-container>
    <v-sheet class="mx-auto" color="#1a1d22" dark max-width="100%">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 6" :key="n" v-slot:default="{ active, toggle }">
          
          
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="340"
            width="172"
            @click="toggle"
          >
          
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition>
                <v-icon v-if="active" color="white" size="48" v-text="''"></v-icon>
              </v-scale-transition>

              <v-card
                class="mx-auto"
                width="100%"
                height="100%"
                :color="active ? 'gray darken-1' : 'deep-purple accent-4'"
              >
              
                <v-img
                  class="white--text align-end"
                  height="auto"
                  contain
                  src="../../assets/icons/nodejs-logo.png"
                >
                  <v-card-title>
                    200
                    <v-icon color="white" left>mdi-eye</v-icon>
                  </v-card-title>
                </v-img>

                <v-card-subtitle class="pb-1">نام محصول</v-card-subtitle>
                <v-card-text class="text--white">
                  <p>لورم ایپسوم متن ساختگی با هدف پر کردن دسکرپشن</p>
                  <v-divider class="mx-4"></v-divider>
                  <v-row>
                    <v-col cols="12">
                      <v-btn to="/single" dark text block>
                        مشاهده
                        <v-icon color="white" right>mdi-eye</v-icon>
                      </v-btn>
                      <br>
                      <v-btn dark text block to="/single">
                        سبد خرید
                        <v-icon color="white" right>mdi-cart</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: null
    };
  }
};
</script>

<style>
</style>