/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  var map = {};
  for (var i = 0; i< emails.length;i++) {
    var split = emails[i].split("@");
    var name = split[0];
    var domain = split[1];
    var newName = name.split("+")[0].replace(/\./g, "");
    var result = ''+newName+'@'+domain;
    map[result] = true;
  }
  return Object.keys(map).length;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]));