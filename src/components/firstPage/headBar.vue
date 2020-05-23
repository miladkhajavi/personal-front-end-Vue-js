<template>
  <div>
    <v-app-bar color="#1a1d22" height="80" flat dark class="header">
      <v-avatar @click.stop="drawer = !drawer">
        <img src="../../assets/icons/drawericon.png" />
      </v-avatar>
      <v-spacer></v-spacer>

      <div v-if="auth">
        <router-link to="/cart">
          <v-avatar size="60" class="cartAvatar">
            <img src="../../assets/icons/cart.png" />
          </v-avatar>
        </router-link>
        <v-avatar size="60" class="userAvatar">
          <img src="../../assets/icons/user.png" />
        </v-avatar>
      </div>
      <div v-else>
        <router-link to="/login">
           <v-avatar size="50" class="cartAvatar white--text">
             ورود
          </v-avatar>
        </router-link>
        <router-link to="/register">
           <v-avatar size="50" class="cartAvatar white--text">
             ثبت نام
          </v-avatar>
        </router-link>
      </div>
    </v-app-bar>
    <!-- navbar drawer -->
    <v-navigation-drawer
      v-model="drawer"
      width="200"
      clipped
      mobile-break-point="70"
      fixed
      temporary
      right
      app
    >

  
   
      
      <v-list v-if="auth">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>


 <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" v-if="item.title=='خروج'" color="primary"></v-list-item-title>
          </v-list-item-content>
        </template>
      

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
          
    </v-list>

    


    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
       items: [
          {
            action: 'mdi-account',
            title: 'کاربر',
            items: [
              { title: 'پروفایل'  }
            ],
          },
          {
            action: 'mdi-cart',
            title: 'کالا',
            active: true,
            items: [
              { title: 'مشاهده ی کالا ها' },
              { title: 'پربازدید' },
             
            ],
          },
          {
            action: 'mdi-logout',
            title: 'خروج',
            
          },
        ],
    };
  },
  computed: {
    auth() {
      return this.$store.getters.getIsAuthenticated;
    },
    names() {
      return this.$store.getters.getUserFullName;
    }
  },
  methods: {
    check() {
      this.$store.dispatch("checkLogin");
    }
  },
  watch: {
    group() {
      this.drawer = false;
    }
  },
  created() {
    this.check();
  }
};
</script>

<style>
</style>