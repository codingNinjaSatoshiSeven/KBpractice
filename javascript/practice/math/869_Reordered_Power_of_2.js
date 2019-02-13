/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function(N) {
  var A = count(N);
  for(var i = 0; i<31; i++) {
    if(equals(A, count(1<<i))) {
      return true;
    }
  }
  return false;
};

function count(N) {
  var ans = [];
  for(var i = 0; i<10; i++) ans[i]=0;
  while(N>0) {
    ans[N%10]++;
    N = Math.floor(N/10);
  }
  return ans;
}

function equals(a,b) {
  if(a.length !== b.length) return false;
  for(var i = 0; i<a.length ;i++) {
    if(a[i]!== b[i]){
      return false;
    }
  }
  return true;
}

console.log(reorderedPowerOf2(1));
console.log(reorderedPowerOf2(10));
console.log(reorderedPowerOf2(16));
console.log(reorderedPowerOf2(24));
console.log(reorderedPowerOf2(46));