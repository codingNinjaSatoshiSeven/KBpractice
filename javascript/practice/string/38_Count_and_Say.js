///TODO: REVIEW
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if( !n ) return "";
  var cur = "1", num = 1;
  while (n > 1) {
    var r = "";
    for (var i = 0; i < cur.length; i++) {
      if (i < cur.length -1 && cur[i] === cur[i+1]) {
        num++;
      } else {
        r += (num+ "" + cur[i]);
        num = 1;
      }
    }
    cur = r;
    n--;
  }
  return cur;
};

console.log(countAndSay(4));