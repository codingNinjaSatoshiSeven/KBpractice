
var MyCalendar = function() {
  this.calendar = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i< this.calendar.length; i++) {
    var cal = this.calendar[i];
    if (!(start >= cal[1] || end <= cal[0])) {
      return false;
    }
  }
  this.calendar.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

var myCal = new MyCalendar();
console.log(myCal.book(10, 20)); // true
console.log(myCal.book(15, 25)); // false
console.log(myCal.book(20, 30)); // true