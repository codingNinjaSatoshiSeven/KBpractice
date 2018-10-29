/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  var r = Math.round(Math.sqrt(area));
  while ( area % r !== 0) r--;
  return [area / r, r];
};

console.log(constructRectangle(4))