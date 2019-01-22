/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  var ans = -1;
  for(var i = 0; i<4;i++) {
    for(var j=0;j<4;j++) {
      if(j!==i) {
        for(var k=0;k<4;k++) {
          if(k!==i && k!==j) {
            var l = 6-i-j-k;
            var hours = 10 * A[i]+A[j];
            var mins = 10*A[k] +A[l];
            if(hours <24 && mins <60) {
              ans = Math.max(ans, hours *60+mins);
            }
          }
        }
      }
    }
  }
  return ans >=0 ? formatTime(ans): "";
};

function formatTime(ans) {
  var hr = Math.floor(ans/60);
  var min = ans%60;
  hr = String(hr);
  if(hr.length <2) hr= "0"+hr;
  min = String(min);
  if(min.length <2) min= "0"+min;
  return hr+":"+min;
}

console.log(largestTimeFromDigits([1,2,3,4]));
console.log(largestTimeFromDigits([5,5,5,5]));