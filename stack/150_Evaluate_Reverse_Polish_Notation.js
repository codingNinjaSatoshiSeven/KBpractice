/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  var stack = [];
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    switch(token) {
      case "+":
        var first = stack.pop();
        var second = stack.pop();
        var result = second + first;
        stack.push(result);
        break;
      case "-":
        var first = stack.pop();
        var second = stack.pop();
        var result = second - first;
        stack.push(result);
        break;
      case "*":
        var first = stack.pop();
        var second = stack.pop();
        var result = second * first;
        stack.push(result);
        break;
      case "/":
        var first = stack.pop();
        var second = stack.pop();
        var result = second / first;
        result = result >=0 ? Math.floor(result) : Math.ceil(result);
        stack.push(result);
        break;
      default: 
        stack.push(+token);
    }
  }
  return stack[0];
};
