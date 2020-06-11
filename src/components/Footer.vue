<template>
  <b-container fluid class="footer-container" v-if="isNotAvailable()">
    <b-row>
      <b-col class="text-center py-4 py-lg-5">Copyright © 2020 Climate Score</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    isNotAvailable: function() {
      return ["/score", "/report"].includes(window.location.pathname);
    }
  }
};
</script>