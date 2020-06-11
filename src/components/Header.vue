<template>
  <b-container fluid class="header-container">
    <b-row>
      <b-col class="p-5 px-lg-5 py-lg-4 text-center text-lg-left">
        <router-link to="/">
          <b-img :src="logoImgSrc" height="80" />
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import logoImgSrc from "../assets/images/logo-white.png";
export default {
  data() {
    return {
      logoImgSrc
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  position: absolute;
  z-index: 10;
  top: 0px;
}
</style>