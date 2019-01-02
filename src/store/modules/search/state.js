import * as Models from './models';

/**
 * 検索用ステート
 */
class SearchState {
  /**
   * 検索用ステート
   */
  constructor() {
    /**
     * 検索結果
     * @type {Models.SearchResult[]}
     */
    this.result = [];
  }
}

export {
  SearchState
};

export default new SearchState();