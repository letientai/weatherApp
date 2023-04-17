import Vue from "vue";
import Vuex from "vuex";
import language from "./module/language/language";
// import createPersistedState from "vuex-persistedstate";
// import SecureLS from "secure-ls";
// var ls = new SecureLS({ isCompression: false });
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: { language },
  // plugins: [
  //   createPersistedState({
  //     // storage: {
  //     //   getItem: (key) => ls.get(key),
  //     //   setItem: (key, value) => ls.set(key, value),
  //     //   removeItem: (key) => ls.remove(key),
  //     // },
  //     storage: window.localStorage,
  //   }),
  // ],
});
