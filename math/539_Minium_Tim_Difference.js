/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  if(timePoints.length <= 1) return 0;
  timePoints = timePoints.map(time =>{
    return split(time);
  });
  timePoints.sort((a,b)=>{
    return a.hr === b.hr ? a.min - b.min : a.hr - b.hr;
  });
  var min = 24 * 60;
  for (var i = 1; i < timePoints.length; i++) {
    var diff = compare(timePoints[i-1], timePoints[i]);
    min = Math.min(min, diff);
  }
  var diff = compare(timePoints[0], timePoints[timePoints.length-1]);
  min = Math.min(min, diff);
  return min;
};

function split(time) {
  var [ hr, min ] = time.split(":");
  return {
    hr: +hr,
    min: +min,
  };
}

function compare(timeA, timeB) {
  var a, b;
  if(timeA.hr < timeB.hr || (timeA.hr === timeB.hr && timeA.min < timeB.min)) {
    a = timeA;
    b = timeB;
  } else {
    a = timeB;
    b = timeA;
  }
  var t1 = (b.hr-a.hr)*60 + (b.min-a.min);
  var c = Object.assign({}, a);
  c.hr = a.hr+24;
  var t2 = (c.hr-b.hr)*60 + (c.min-b.min);
  return Math.min(t1,t2);
}

console.log(findMinDifference(["23:59","00:00"]));
console.log(findMinDifference(["01:01","02:01","03:00","03:01"]));
console.log(findMinDifference(["05:31","22:08","00:35"]));