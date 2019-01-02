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

  // これをゲッターの代わりにする
  get sortedByIdResult() {
    return this.result.sort((a, b) => {
      const idA = a.id.toUpperCase();
      const idB = b.id.toUpperCase();
      if (idA < idB) {
        return -1;
      }
      if (idA > idB) {
        return 1;
      }

      return 0;
    });
  }
}

export {
  SearchState
};

export default new SearchState();