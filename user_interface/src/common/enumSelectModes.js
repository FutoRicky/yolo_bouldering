/**
 * ENUM
 * https://stackoverflow.com/questions/44447847/enums-in-javascript-with-es6
 */
class SelectModes {
  // Private Fields
  static #_HANDHOLD = 0;
  static #_FOOTHOLD = 1;
  static #_DRAWBOX = 2;
  static #_EXPORT = 3;

  // Accessors for "get" functions only (no "set" functions)
  static get HANDHOLD() {
    return this.#_HANDHOLD;
  }
  static get FOOTHOLD() {
    return this.#_FOOTHOLD;
  }
  static get DRAWBOX() {
    return this.#_DRAWBOX;
  }
  static get EXPORT() {
    return this.#_EXPORT;
  }
}

export default SelectModes;
