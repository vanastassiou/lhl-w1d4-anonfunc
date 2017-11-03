/* input = x and y values for the Pythagorean theorem
Complete the code so that it returns the z values in the assertions
Recall that x^2 + y^2 = z^2

*/
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(currentValue) {
  var z = Math.sqrt(Math.pow(currentValue.x, 2) + Math.pow(currentValue.y, 2));
  return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

/* To use the map() method:

* The map() method returns a new array as its result
* The new array contains the results of a provided function that is called on every element in the array that map() is called upon

var resultingArray = oldArray.map(function callback(currentValue, index) {
}

*/
