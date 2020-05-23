<template>
  <div>
    <v-app-bar color="#1a1d22" height="80" dark class="header">
      <router-link to="/">
        <v-avatar size="60" class="cartAvatar">
          <img src="../../assets/icons/arrow.png" class="imageClassColor" />
        </v-avatar>
      </router-link>
    </v-app-bar>
    <v-card container class="class-section" dark flat color="#1a1d22">
      <v-container>
        <v-row>
          <v-col md="12">
            <form class="bordercard">
              <div class="imageItem">
                <v-img
                  src="../../assets/background/lock.svg"
                  contain
                  height="300"
                  class="borderImageItem"
                />
              </div>
              <v-container>
                <v-text-field v-model="userName" label="نام کاربری" auto-grow outlined required></v-text-field>
                <v-text-field
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  v-model="password"
                  label="رمزعبور"
                  required
                  auto-grow
                  outlined
                ></v-text-field>
              </v-container>
              <v-col cols="12" class="d-flex justify-end">
                <v-btn color="deep-purple accent-4 white--text" block v-on:click.prevent="submit">
                  <span>ورود</span>
                  <v-icon right>mdi-arrow-right-bold-circle-outline</v-icon>
                </v-btn>
              </v-col>
                 <v-container>
              <v-col cols="12">
                <v-row>
                    <p class="white--text">
                    حساب کاربری نداری؟ میتونی
                    <router-link to="/register">
                      <a class="deep-purple--text text--accent-4">ثبت نام</a>
                    </router-link>کنی
                  </p>
                  <v-spacer></v-spacer>
                  <!-- <p class=""> -->
                    <router-link to="/">
                      <a class="white--text">فراموشی رمز عبور</a>
                    </router-link>
                  <!-- </p> -->
                </v-row>
              </v-col>
                 </v-container>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      userName:'',
      password:''
    };
  },
  methods: {
    submit(){
     let data = {
        userName:this.userName,
        password:this.password
      }
      this.$store.dispatch("loginFromServer",data)
    }
  },
  beforeCreate() {
    if(localStorage.getItem('TOKEN_KEY')){
      this.$router.push('/')
    }
  },
};
</script>

<style>
.imageItem {
  padding: 10px;
}
</style>