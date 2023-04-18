import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import i18n from "./language/i18n";
import store from "./store/Index";
// import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDPm_QnYeqX-zFJ-4AusURyOwuLxhzMtjA",
    libraries: "places,",
  },
});

// Vue.use(BootstrapVueIcons);
// Vue.use(BootstrapVue);


new Vue({
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");
