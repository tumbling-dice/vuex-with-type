import namespace from './namespace';

/**
 * 検索処理
 */
export class Search {
  /**
   * 検索処理
   * @param {string} id ID
   */
  constructor(id) {
    /**
     * ID
     * @type {string}
     */
    this.id
  }

  get type() {
    return Search.type;
  }

  static get type() {
    return `${namespace}/Search`
  }
}