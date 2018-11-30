import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResouse from 'vue-resource'
import { routes } from './routes'
 


Vue.use(VueRouter);
Vue.use(VueResouse)
const Router = new VueRouter({
  routes: routes,
  mode: 'history'
})




new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
