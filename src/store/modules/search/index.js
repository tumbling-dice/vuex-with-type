import state from './state';
import mutations from './mutations';
import actions from './actions';

const module = {
  state,
  mutations,
  actions
};

export default module;
export {
  default as nsSearch
}
from "./namespace";