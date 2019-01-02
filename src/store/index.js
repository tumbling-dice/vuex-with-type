import Vue from "vue";
import Vuex from "vuex";
import searchModule, {
  nsSearch,
  SearchState
} from './modules/search/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    [nsSearch]: searchModule
  }
});

export default store;
/** @type {SearchState} */
export const searchState = store.state[nsSearch];