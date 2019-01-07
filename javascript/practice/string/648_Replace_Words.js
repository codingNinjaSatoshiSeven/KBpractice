/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
  var words = sentence.split(' ');
  for (var i=0;i<words.length; i++) {
    var root = '';
    for(var j=0;j<dict.length; j++) {
      var d = dict[j];
      if (words[i].startsWith(d)) {
        if(root === '') root = d;
        else if (root.length > d.legnth) {
          root = d;
        }
      }
    }
    if(root !== '') words[i] = root;
  }
  return words.join(" ");
};

console.log(replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"));