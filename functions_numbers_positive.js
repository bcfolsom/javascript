// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var a = [-3, -2, -1, 0, 1, 2, 3];
function isPositive (n) {
  return n > 0;
}
a.filter(isPositive);