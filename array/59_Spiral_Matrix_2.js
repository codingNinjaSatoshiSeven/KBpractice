///TODO: REVIEW
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  var res = [], i, j, count = 1;
  for (var i = 0; i < n; i++) {
    res[i] = [];
    for (var j = 0; j < n; j++) {
      res[i].push(0);
    }
  }
  var hs = ws = 0, he = we = n-1;
  n = Math.ceil(n/2);
  while (n--) {
    for (var i = ws; i <= we; i++) {
      res[hs][i] = count++;
    }
    hs++;
    for (var i = hs; i <= he; i++) {
      res[i][we] = count++;
    }
    we--;
    for (var i = we; i >=ws; i--) {
      res[he][i] = count++;
    }
    he--;
    for (var i = he; i >= hs; i--) {
      res[i][ws] = count++;
    }
    ws++;
  }
  return res;
};