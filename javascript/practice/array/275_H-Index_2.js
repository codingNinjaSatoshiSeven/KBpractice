/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  var len = citations.length, left = 0, right = len-1;
  while(left <=right) {
    var mid = Math.round(0.5* (left+right));
    if(citations[mid] === len - mid) return len - mid;
    else if (citations[mid] > len-mid) right = mid -1;
    else left = mid+1;
  }
  return len - left;
};

console.log(hIndex([0,1,3,5,6]));