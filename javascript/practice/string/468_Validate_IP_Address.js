/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
  if(!IP || IP.length ===0) return "Neither";
  if (IP.includes('.')) {
    // possible IPv4
    var arr = IP.split('.');
    if (arr.length !== 4) return "Neither";
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      if(val.length ===0) return "Neither";
      if (val.match(/\D/g)) {
        return "Neither";
      }

      if(val[0] === '0' && val.length !==1) return "Neither";
      val = parseInt(val);
      if (val>255) {
        return "Neither";
      }
    }
    return "IPv4";
  } else if (IP.includes(':')) {
    //possible IPv6
    var arr = IP.split(':');
    if (arr.length !== 8) return "Neither";
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      val = val.toLowerCase();
      if(val.match(/[g-z,/-]/g)) {
        return "Neither";
      }
      if(val.length ===0 || val.length >4) return "Neither";
      if (val.length >4 && val[0] ==='0'){
        // leading 0s
        return "Neither";
      }
    }
    return "IPv6";
  } else {
    return "Neither";
  }
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3::8A2E:0370:7334"));
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:73341"));
console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));