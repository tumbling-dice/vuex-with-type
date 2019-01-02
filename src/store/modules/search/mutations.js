import {
  SearchState
} from './state';
import * as types from './mutationTypes';

const mutations = {
  /**
   * 検索結果設定
   * @param {SearchState} state 
   * @param {types.SetResult} payload 
   */
  [types.SetResult.type](state, {
    result
  }) {
    state.result = result;
  }
}

export default mutations;