
<template>
  <v-app>
 
 <!-- <Vue-header></Vue-header> -->

    <transition enter-active-class="animated fadeIn">
    <router-view></router-view>
  </transition>
  

   <!-- <Vue-footer></Vue-footer> -->

   
   
  </v-app>
</template>

<script>
import VueHeader from "./components/share/header";
import VueFooter from "./components/share/footer";
export default {
  components: {
    VueHeader,
    VueFooter
  },

  data: () => ({
  
    
  })


};
</script>
<style>
 
  
</style>
