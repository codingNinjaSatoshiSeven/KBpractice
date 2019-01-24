/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  var mem = [0, 1];
  if(N<2) return mem[N];
  for(var i = 2; i<= N; i++) {
    if(!mem[i]) {
      mem[i] = mem[i-1] + mem[i-2];
    }
  }
  return mem[N];
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));