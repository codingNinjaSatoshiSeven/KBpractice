/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if(timeSeries.length ===0) return 0;
  var res = 0, n = timeSeries.length;
  for (var i = 1; i<n; i++) {
    var diff = timeSeries[i] - timeSeries[i-1];
    res+= diff < duration ? diff: duration;
  }
  return res+duration;
};