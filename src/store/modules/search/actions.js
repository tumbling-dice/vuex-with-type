import {
  ActionContext
} from 'vuex';
import * as types from './actionTypes';
import * as mutationTypes from './mutationTypes';

const actions = {
  /**
   * 検索処理
   * @param {ActionContext} context 
   * @param {types.Search} payload 
   */
  async [types.Search.type]({
    commit
  }, {
    id
  }) {
    const body = JSON.stringify({
      id
    });
    const resp = await fetch("/search", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body
    });
    commit(new mutationTypes.SetResult(resp.json()))
  }
}

export default actions;