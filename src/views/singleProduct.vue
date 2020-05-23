<template>
  <div>
    <v-app-bar color="#1a1d22" height="80" flat dark class="header">
      <router-link to="/">
        <v-avatar size="60" class="cartAvatar">
          <img src="../assets/icons/arrow.png" class="imageClassColor" />
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>

      <v-avatar size="60" class="cartAvatar">
        <img src="../assets/icons/cart.png" />
      </v-avatar>
    </v-app-bar>

    <v-card container class="class-section" color="#1a1d22" id="create">
      <single-product></single-product>
      <slide-group></slide-group>
      <comment-box></comment-box>
      <show-comments></show-comments>
    </v-card>
  </div>
</template>

<script>
import singleProduct from "../components/singlePage/product";
import slideGroup from "../components/singlePage/slideGroup";
import commentBox from "../components/singlePage/commentBox";
import showComments from "../components/singlePage/showComments";
export default {
  data() {
    return {
      
    };
  },
  components: {
    singleProduct,
    slideGroup,
    commentBox,
    showComments
  }
};
</script>

<style>
</style>