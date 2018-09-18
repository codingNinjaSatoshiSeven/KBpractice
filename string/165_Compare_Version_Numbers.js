/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var v1 = version1.split(".");
  var v2 = version2.split(".");
  var i = 0;
  while ( i < v1.length && i < v2.length) {
    var a = +v1[i];
    var b = +v2[i];
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      i++;
      continue;
    }
  }
  if (v1.length === v2.length) {
    return 0;
  } else if (v1.length > v2.length) {
    while (i < v1.length) {
      var v = +v1[i];
      if (v !== 0) {
        return 1;
      }
      i++;
    }
    return 0;
  } else {
    while (i < v2.length) {
      var v = +v2[i];
      if (v !== 0) {
        return -1;
      }
      i++;
    }
    return 0;
  }
};

console.log(compareVersion("0.1", "1.1"));
console.log(compareVersion("1.0.1", "1"));
console.log(compareVersion("7.5.2.4", "7.5.3"));
console.log(compareVersion("01", "1"));
console.log(compareVersion("1.0", "1"));
