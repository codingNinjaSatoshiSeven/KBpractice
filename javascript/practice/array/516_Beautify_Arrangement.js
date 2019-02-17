///TODO:REVIEW
/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  var visited = [];
  for(var i = 0; i<=N; i++) {
    visited[i] = false;
  }
  var count = {val: 0}
  calculate(N, 1, visited, count);
  return count.val;
};

function calculate(N, pos, visited, count) {
  if(pos>N) {
    count.val++;
  }
  for(var i = 1; i<=N; i++) {
    if(!visited[i] && (pos %i ===0 || i % pos ===0)) {
      visited[i] = true;
      calculate(N, pos+1, visited, count);
      visited[i] = false;
    }
  }
}

console.log(countArrangement(2));