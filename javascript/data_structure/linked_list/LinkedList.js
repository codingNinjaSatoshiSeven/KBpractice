export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    //To be implemented
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {
    //To be implemented
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    //To be implemented
  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
    //To be implemented
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {
    //To be implemented
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    //To be implemented
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    //To be implemented
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    //To be implemented
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    //To be implemented
  }

  /**
   * @return {string}
   */
  toString() {
    //To be implemented
  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {
    //To be implemented
  }
}