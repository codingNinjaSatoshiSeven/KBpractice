/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  var map = {};
  for (var i = 0; i < cpdomains.length; i++) {
    var [ count, cpdomain ] = cpdomains[i].split(" ");
    count = +count;
    if (!map[cpdomain]) {
      map[cpdomain] = count;
    } else {
      map[cpdomain] += count;
    }
    var currentIndex = 0;
    var lastIndex = cpdomain.lastIndexOf('.');
    var index = 0;
    while (index < lastIndex) {
      index = cpdomain.indexOf('.', currentIndex);
      var domain = cpdomain.substr(index+1);
      if (!map[domain]) {
        map[domain] = count;
      } else {
        map[domain] += count;
      }
      currentIndex = index+1;
    }
  }
  var result = [];
  for (var key in map) {
    var str = ""+map[key]+ " " + key;
    result.push (str);
  }
  return result;
};

var a = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(a));
a = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(a));