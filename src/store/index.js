import Vue from "vue";
import Vuex from "vuex";
import searchModule, {
  nsSearch
} from './modules/search/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    [nsSearch]: searchModule
  }
});

export default store;