import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/home.vue'
import ScorePage from './pages/score.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: HomePage
}, {
  path: '/score',
  component: ScorePage
}];

export default new VueRouter({
  mode: 'history',
  routes
});