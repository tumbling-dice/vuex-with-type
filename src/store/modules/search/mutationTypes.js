import namespace from './namespace';
import {
  SearchResult
} from './models';

/**
 * 検索結果設定
 */
export class SetResult {
  /**
   * 検索結果設定
   * @param {SearchResult[]} result 検索結果
   */
  constructor(result) {
    /**
     * 検索結果
     * @type {SearchResult[]}
     */
    this.result = result;
  }

  get type() {
    return SetResult.type;
  }

  static get type() {
    return `${namespace}/SetResult`;
  }
}