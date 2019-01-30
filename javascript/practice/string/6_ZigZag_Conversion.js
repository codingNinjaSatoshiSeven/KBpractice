/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  var rows = [];
  for(var i = 0; i< Math.min(numRows, s.length); i++) {
    rows.push([]);
  }
  var curRow = 0;
  var goingDown = false;

  for(var i = 0 ; i<s.length; i++) {
    rows[curRow].push(s[i]);
    if(curRow === 0 || curRow === numRows - 1) {
      goingDown = !goingDown;
    }
    curRow += goingDown ? 1: -1;
  }
  var res = "";
  for (var i = 0; i<rows.length; i++) {
    res+= rows[i].join("");
  }
  return res;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));