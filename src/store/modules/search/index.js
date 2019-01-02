import state from './state';
import mutations from './mutations';
import * as SearchMutation from "./mutationTypes";
import actions from './actions';
import * as SearchAction from './actionTypes';

const module = {
  state,
  mutations,
  actions
};

export default module;
export {
  SearchState
}
from "./state";
export {
  default as nsSearch
}
from "./namespace";
export {
  SearchMutation,
  SearchAction
};