<template>
  <div>
    <v-app-bar color="#1a1d22" height="80" flat dark class="header">
      <!-- <v-spacer></v-spacer>
      <v-text>ورود</v-text>-->
      <router-link to="/">
        <v-avatar size="60" class="cartAvatar">
          <img src="../../assets/icons/arrow.png" class="imageClassColor" />
        </v-avatar>
      </router-link>
    </v-app-bar>
    <v-card container class="class-section" color="#1a1d22">
      <!-- <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">اسمت چیه ؟</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">خونتون کجاست؟</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">قدم اخرو برداری تمومه</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items class="back">
          <v-stepper-content step="1">
            <v-card class="mb-12" color="grey lighten-1">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="نام"
                      auto-grow
                      outlined
                      shaped
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="15"
                      label="نام خانوادگی"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="ایمیل"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>
                </v-row>
                <div class="clearfix"></div>
              </v-container>
            </v-card>

            <v-btn :disabled="valid" color="primary" @click="e1 = 2">بعدی</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-1">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-textarea
                      v-model="address"
                      label="آدرس"
                      :rules="addressRules"
                      required
                      auto-grow
                      outlined
                      rows="3"
                      row-height="25"
                      shaped
                    ></v-textarea>
                  </v-col>
                </v-row>
                <div class="clearfix"></div>
              </v-container>
            </v-card>

            <v-btn text @click="e1 = 1">قبل</v-btn>
            <v-btn color="primary" @click="e1 = 3">بعدی</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-12" color="grey lighten-1">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="username"
                      label="نام کاربری"
                      :rules="usernameRules"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>

                    <v-text-field
                      :type="show ? 'text' : 'password'"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show = !show"
                      v-model="password"
                      label="گذرواژه"
                      :rules="passwordRules"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <div class="clearfix"></div>
            </v-card>

            <v-btn text @click="e1 = 2">قبل</v-btn>
            <v-btn color="primary">ثبت</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>-->

      <v-container>
        <v-card class="mx-auto" dark flat color="#1a1d22">
          <v-card-title class="title font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar
              color="primary lighten-2"
              class="subheading white--text"
              size="24"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="15"
                      label="نام"
                      auto-grow
                      outlined
                      shaped
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="15"
                      label="نام خانوادگی"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      label="ایمیل"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="mobile"
                      type="number"
                      label="موبایل"
                      auto-grow
                      outlined
                      shaped
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <div class="clearfix"></div>
              </v-container>
            </v-window-item>

            <v-window-item :value="2">
              <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-textarea
                      v-model="address"
                      label="آدرس"
                      :rules="addressRules"
                      required
                      auto-grow
                      outlined
                      rows="3"
                      row-height="25"
                      shaped
                    ></v-textarea>
                  </v-col>
                </v-row>
                <div class="clearfix"></div>
              </v-container>
            </v-window-item>

            <v-window-item :value="3">
               <v-container>
                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="username"
                      label="نام کاربری"
                      :rules="usernameRules"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>

                    <v-text-field
                      :type="show ? 'text' : 'password'"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show = !show"
                      v-model="password"
                      label="گذرواژه"
                      :rules="passwordRules"
                      required
                      auto-grow
                      outlined
                      shaped
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>

            </v-window-item>
         
          <v-window-item :value="4">
              <div class="pa-4 text-center">
                <v-img
                  class="mb-4"
                  contain
                  height="128"
                  src="../../assets/background/social.svg"
                ></v-img>
                <h3 class="title font-weight-light mb-2">کاربر, <strong class="green--text headline">{{firstname}}</strong> عزیز اگر از اطلاعات وارد شده اطلمینان دارید کلید زیر را فشار دهید</h3>
                <v-btn color="#6200EA">ثبت اطلاعات</v-btn>
              </div>
            </v-window-item>
          </v-window>

          <v-divider color="#6200EA"></v-divider>
          <br>
          <v-card-actions>
            <v-btn :hidden="step === 1" text @click="step--">قبلی</v-btn>
            <v-spacer></v-spacer>
            <v-btn :hidden="step === 4" color="primary" depressed @click="step++">بعدی</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
      <v-container>
        <p class="white--text">
          حساب کاربری دارید؟از  
           <router-link to="/login"><a class="deep-purple--text text--accent-4">اینجا</a></router-link> 
           وارد شوید  
        </p>
      </v-container>
    </v-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      step: 1,

      e1: 1,
      valid: false,
      show: false,
      gender: "male",
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "الزامی است",
        v =>
          v.length <= 15 ||
          `نام یا نام خانوادگی نمیتواند بیشتر از 15 کاراکتر باشد`
      ],
      email: "",
      emailRules: [
        v => !!v || "ایمیل الزامی است",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      address: "",
      addressRules: [
        v => !!v || "آدرس الزامی است",
        v => v.length <= 100 || "   آدرس نمیتواند بیشتر از 100 کاراکتر باشد"
      ],
      username: "",
      usernameRules: [v => !!v || "نام کاربری الزامی است"],
      password: "",
      passwordRules: [
        v => !!v || " گذرواژه الزامی است",
        v => v.length >= 8 || `  گذز واژه نمیتواند کمتر از 8 کاراکتر باشد`
      ],
      mobile: "",
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "اسمت چیه؟";
        case 2:
          return "خونتون کجاس";
        case 3:
          return "نام کاربری برای خودت درست کن";
        default:
          return "تایید اطلاعات";
      }
    }
  },
  beforeCreate() {
    if(localStorage.getItem('TOKEN_KEY')){
      this.$router.push('/')
    }
  }
};
</script>

<style>
.back {
  background-color: #1a1d22;
}

.borderdivider{
 border-style: dashed;
  /* border:1px dashed */
}
</style>