import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './pages/home.vue'
import ScorePage from './pages/score.vue'
import ReportPage from './pages/report.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: HomePage
}, {
  path: '/score',
  component: ScorePage
}, {
  path: '/report',
  component: ReportPage
}];

export default new VueRouter({
  mode: 'history',
  routes
});