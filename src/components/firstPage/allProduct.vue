<template>
  <v-container>
    <v-row dense>
      <v-col lg="3" md="6" sm="6" cols="12" v-for="item in 4" :key="item">
        <div class="wrapper">
          <div class="product-card index" v-ripple>
            <div class="product-card__image product-card__image--index">
              <img src="../../assets/icons/nodejs-logo.png" />
            </div>
            <div class="product-card__level product-card__level--index">برنامه نویسی</div>
            <div class="product-card__unit-name">اموزش جامع node js</div>
            <div class="stat-value">(4.2)</div>
            <div class="product-card__unit-stats product-card__unit-stats--index clearfix">
              <router-link to>
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">سبد خرید</div>
                </div>
              </router-link>

              <router-link to="/single">
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">مشاهده</div>
                </div>
              </router-link>

              <div class="one-third no-border">
                <div class="stat"></div>
                <div class="stat-value">250,000</div>
              </div>
            </div>
          </div>
          <!-- end product-card index-->
        </div>
      </v-col>
      <v-col lg="3" md="6" sm="6" cols="12" v-for="item in 4" :key="item">
        <div class="wrapper">
          <div class="product-card index" v-ripple>
            <div class="product-card__image product-card__image--index">
              <img src="../../assets/icons/nodejs.png" />
            </div>
            <div class="product-card__level product-card__level--index">برنامه نویسی</div>
            <div class="product-card__unit-name">اموزش پروژه محور node js</div>
            <div class="stat-value">(4.9)</div>

            <div class="product-card__unit-stats product-card__unit-stats--index clearfix">
              <router-link to>
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">سبد خرید</div>
                </div>
              </router-link>

              <router-link to="/single">
                <div class="one-third">
                  <div class="stat"></div>
                  <div class="stat-value">مشاهده</div>
                </div>
              </router-link>

              <div class="one-third no-border">
                <div class="stat"></div>
                <div class="stat-value">500,000</div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>