<template>
  <!-- 1a1d22 -->
  <div>
    <head-bar></head-bar>
    <!-- background -->
    <v-card container class="class-section" color="#1a1d22" id="create">
 
        <img src="../assets/background/beautysvg.svg" class="backgroundSvgUp">
   
 <img src="../assets/background/footer.svg" class="backgroundSvgDown">
      <search-Box></search-Box>
     <v-container>
      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">{{ slide }} Slide</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
     </v-container>
      <v-container>
          <v-col cols="12">
        <v-row>

          <v-badge color="red" dot></v-badge>
          <v-toolbar-title class="white--text">جدید</v-toolbar-title>
      
          <v-spacer></v-spacer>
          <v-toolbar-title class="white--text">پربازدید</v-toolbar-title>
      
          <v-spacer></v-spacer>
    
      
          <v-toolbar-title class="white--text">ترند</v-toolbar-title>
    
        </v-row>
          </v-col>
        
      </v-container>
      <!-- product -->
     
        <product-app></product-app>
      

      <v-divider></v-divider>
      <v-container>
      
          
          <v-btn
          class="white--text"
          color="orange"
          depressed
        >
          همه ی محصولات
        </v-btn>
      
 
      </v-container>
       <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
        <product-apps></product-apps>
      </v-lazy>
      
      <!-- end wrapper -->
      <!-- </v-row>
      </v-container>-->
      <speed-dial-menu></speed-dial-menu>
      <!-- <v-footer
      
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer> -->
    </v-card>
    
   
  </div>
</template>

<script>
import header from "../components/firstPage/headBar";
import search from "../components/firstPage/searchBox";
import products from "../components/firstPage/products";
import Allproducts from "../components/firstPage/allProduct";
import DialMenu from "../components/firstPage/dialMenu";
export default {
  data: () => ({
    colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    isActive: false,
    divider: true
  }),

  components: {
    "head-bar": header,
    "search-Box": search,
    "product-app": products,
    "product-apps":Allproducts,
    "speed-dial-menu":DialMenu
  }
};
</script>

<style>
#create .v-speed-dial {
  position: fixed;
  right: 30;
}

#create .v-btn--floating {
  position: relative;
}
.backgroundSvgUp{
      bottom: -480px;
    position: absolute;
    right: 0px;
    width: 600px;
    opacity: 0.3;
}
.backgroundSvgDown{
      bottom: -70px;
    position: absolute;
    left: 0;
    width: 900px;
    opacity: 0.2;
}
img{
    max-width: 100%;
    height: auto;
     
}
</style>