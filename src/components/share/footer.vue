<template>
  <v-footer dark padless class="footer">
      <v-tabs dark background-color="dark" grow>
        <v-tab>
          <v-badge color="green" icon="mdi-cash">شارژ</v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="red" content="+99">محصولات</v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="deep-purple accent-4" icon="mdi-cart">سبد خرید</v-badge>
        </v-tab>

        <v-tab>
          <v-badge color="blue" icon="mdi-account">حساب</v-badge>
        </v-tab>
      </v-tabs>
    </v-footer>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
</style>