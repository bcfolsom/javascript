// Write a function which takes an array of numbers as input and returns a new array containing result of squaring 
// each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var a = [1, 2, 3];
function squareTheNumbers (n) {
  return a.map(function (n) {
    return Math.pow(n, 2);
  });
}
squareTheNumbers([1, 2, 3]);