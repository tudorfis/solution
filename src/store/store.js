import Vue from "vue";
import Vuex from "vuex";
import apiStore from "./api/api.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    api: apiStore
  }
});
