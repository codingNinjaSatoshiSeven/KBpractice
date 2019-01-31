/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  var stack = [];
  stack.push(0); // the score of the current frame
  for(var i = 0; i< S.length; i++) {
    if(S[i]=== '(') {
      stack.push(0);
    } else {
      var v = stack.pop();
      var w = stack.pop();
      stack.push(w+Math.max(2*v, 1));
    }
  }
  return stack.pop();
};

console.log(scoreOfParentheses('()'));
console.log(scoreOfParentheses('(())'));
console.log(scoreOfParentheses("(()(()))"));