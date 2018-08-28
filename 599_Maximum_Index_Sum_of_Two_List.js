/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  var map = {}, result = {} ;
  for (var i = 0; i < list1.length; i++) {
    map[list1[i]] = i;
  }
  for (var i = 0; i< list2.length; i++) {
    if (list2[i] in map) {
      result[list2[i]] = map[list2[i]] + i;
    }
  }
  var min = Number.POSITIVE_INFINITY;
  var strResult = [];
  for (var key in result) {
    if (result[key] < min) {
      min = result[key];
    }
  }
  for (var key in result) {
    if(result[key] === min) {
      strResult.push(key);
    }
  }
  return strResult;
};

var a = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
var b = ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"];

console.log(findRestaurant(a,b));

var c = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
var d = ["KFC", "Shogun", "Burger King"];

console.log(findRestaurant(c,d));