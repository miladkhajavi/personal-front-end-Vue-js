<template>
<v-container>
 <v-card class="mx-auto p-4" color="#1a1d22" dark flat max-width="100%">
    <form class="bordercard">
    
        <v-container fluid>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle-outline"
      placeholder="نظر خود را اینجا بنویسید"
      class="p-5"
    ></v-textarea>
  </v-container>
    </form>
    <v-card-text>
     <v-btn
     color="deep-purple accent-4 white--text"
     >
   <span>ارسال</span><v-icon right>mdi-send</v-icon>
     </v-btn>
    </v-card-text>
    </v-card>
   
</v-container>
</template>

<script>
export default {

}
</script>

<style>
.bordercard{
    border: 2px dashed#6200EA;
    border-radius: 10px;
    padding: 10px;
}
</style>