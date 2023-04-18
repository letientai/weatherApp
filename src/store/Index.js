import Vue from "vue";
import Vuex from "vuex";
import language from "./module/language/language";
import weather from "./module/weather/weather";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: { language, weather },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
});
