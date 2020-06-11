import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VuePlaceAutocomplete from 'vue-place-autocomplete';

import App from './App.vue'

import router from './router'
import store from './store/'

import './assets/style.scss'

Vue.config.productionTip = false

Vue.use(VuePlaceAutocomplete);
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')