/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var res = [1];
  var i2=0, i3=0, i5=0;
  while(res.length <n) {
    var m2 = res[i2]*2;
    var m3 = res[i3]*3;
    var m5 = res[i5]*5;
    var mn = Math.min(m2, Math.min(m3, m5));
    if(mn === m2) i2++;
    if(mn === m3) i3++;
    if(mn === m5) i5++;
    res.push(mn);
  }
  return res[res.length-1];
};

console.log(nthUglyNumber(10));