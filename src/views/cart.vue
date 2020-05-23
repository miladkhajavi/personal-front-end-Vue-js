<template>
  <div>
    <v-app-bar color="#1a1d22" height="80" flat dark class="header">
      <router-link to="/">
        <v-avatar size="60" class="cartAvatar">
          <img src="../assets/icons/arrow.png" class="imageClassColor" />
        </v-avatar>
      </router-link>
      <v-spacer></v-spacer>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-avatar size="60" class="userAvatar" v-on="on">
            <img src="../assets/icons/user.png" />
          </v-avatar>
        </template>
        <span>{{userItemCarts.data.item.user.firstName}} {{userItemCarts.data.item.user.lastName}}</span>
      </v-tooltip>
    </v-app-bar>

    <v-card class="class-section" flat dark color="#1a1d22">
      <v-container v-if="existCart">
        <v-row>
          <v-col xl="8" lg="8" md="8" sm="12" cols="12">
            <div class="bordercard">
              <v-container v-for="(item,i) in userItemCarts.data.item.order" :key="(item,i)">
                <v-card class="mx-auto" outlined color="#1a1d22">
                  <v-list-item>
                    <v-list-item-avatar tile size="104" color="gray">
                      <v-img src="../assets/1102010.jpg"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <div class="overline mb-2">{{item.product._id}}</div>
                      <v-list-item-title class="headline mb-2">{{item.product.title}}</v-list-item-title>
                      <v-list-item-subtitle>{{item.product.type}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <p>قیمت واحد: {{item.product.price}} تومان</p>

                  <v-card-actions>
                    <v-row>
                      <v-card-title>کل: {{(item.product.price)*(item.count)}} تومان</v-card-title>
                      <v-spacer></v-spacer>
                      <div class="text-field-details">
                        <!-- <v-text-field
                          v-model="counter"
                          type="number"
                          label="تعداد"
                          :value="item.count"
                          append-outer-icon="mdi-plus"
                          prepend-icon="mdi-minus"
                        ></v-text-field>-->
                        تعداد {{item.count}}
                      </div>
                    </v-row>
                  </v-card-actions>
                  <v-btn color="red accent-4" small fab v-on:click="deleteOrder(item.product._id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-card>
                <br />
                <v-divider></v-divider>
              </v-container>
            </div>
          </v-col>

          <v-col xl="4" lg="4" md="4" sm="12" cols="12">
            <div class="bordercard">
              <v-card outlined color="#1a1d22">
                <v-col cols="12">
                  <v-row>
                    <v-col cols="6" class="text-rigth">
                      <p>جمع کل کالا ها</p>
                    </v-col>
                    <v-col cols="6" class="text-left">
                      <p>{{totalPrice}}</p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="6" class="text-rigth">
                      <p>مالیـات</p>
                    </v-col>
                    <v-col cols="6" class="text-left">
                      <p>%0</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col cols="6" class="text-rigth">
                      <p>مجموع</p>
                    </v-col>
                    <v-col cols="6" class="text-left">
                      <p>{{totalPrice}}</p>
                    </v-col>
                  </v-row>

                  <v-btn color="#6200EA" block>پرداخت</v-btn>
                </v-col>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-card flat dark color="#1a1d22">
          <v-card-title>سبد خرید شما خالی است</v-card-title>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  methods: {
    getCartItems() {
      this.$store.dispatch("userShopCart");
    },
    deleteOrder(prmz) {
      this.$store.dispatch("deleteItemFromCart", prmz);
    }
  },
  computed: {
    userItemCarts() {
      return this.$store.getters.getUserCart;
    },
    existCart() {
      return this.$store.getters.getCartExist;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    }
  },
  created() {
    this.getCartItems();
  }
};
</script>

<style>
.text-field-details {
  width: 100px;
}
</style>