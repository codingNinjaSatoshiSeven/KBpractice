/**
 * Initialize your data structure here.
 */
var TrieNode = function() {
  this.nodes = [];
  this.endFlag = false;
}
var Trie = function() {
  this.root = new TrieNode();
  this.root.endFlag = true;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  var node = this.root;
  for(var i = 0; i< word.length; i++) {
    var item = word.charCodeAt(i)-97;
    if(!node.nodes[item]) {
      node.nodes[item] = new TrieNode();
    }
    node = node.nodes[item];
  }
  node.endFlag = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  var node = this.root;
  for (var i = 0; i< word.length; i++) {
    var item = word.charCodeAt(i)-97;
    if(node.nodes[item]) {
      node = node.nodes[item];
    } else {
      return false;
    }
  }
  return node.endFlag;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  var node = this.root;
  for (var i = 0; i <prefix.length; i++) {
    var item = prefix.charCodeAt(i)-97;
    if(node.nodes[item]) {
      node = node.nodes[item];
    } else {
      return false;
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */