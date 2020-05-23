<template>
  <v-container>
    <p class="white--text"></p>
    <v-row dense>
      <v-col lg="3" md="6" sm="6" cols="12" v-for="(item,i) in allProducts.item.docs" :key="(item ,i)">
        <div class="wrapper">
          <div class="product-card index" v-ripple>
            <div class="product-card__image product-card__image--index">
              <img src="../../assets/icons/nodejs-logo.png" />
            </div>
            <div class="product-card__level product-card__level--index">{{item.type}}</div>
            <div class="product-card__unit-name">{{item.title}}</div>
           
            <div class="stat-value" v-if="!item.category">(4.2)</div>
            <div class="stat-value" v-if="item.category">(4.2){{item.category.name}}</div>
           
            <div class="product-card__unit-stats product-card__unit-stats--index clearfix">
              <router-link to>
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">سبد خرید</div>
                </div>
              </router-link>

              <router-link  :to="{name:'single', params:{id:item._id} }">
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">مشاهده</div>
                </div>
              </router-link>

              <div class="one-third no-border">
                <div class="stat"></div>
                <div class="stat-value">{{item.price}}</div>
              </div>
            </div>
          </div>
          <!-- end product-card index-->
        </div>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    allProducts(){
      return this.$store.getters.getProducts
    }
  },
  created() {
    this.$store.dispatch("getAllProducts",{
      page:1,
      search:""
    })
  },
};
</script>

<style>
</style>