import Vue from "vue";
import VueRouter from "vue-router";
import weather from "../views/weather.vue";


Vue.use(VueRouter)
const routes = [
  { path: '/', component: weather },
  { path: '/about', component: weather }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
