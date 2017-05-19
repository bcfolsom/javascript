// Write a function printSquare which is given a size and prints a square of that size using asterisks.


function printSquare (size) {
  star = '* ';
  for (var count=0; count<size; count++) {
    console.log(star.repeat(size));
  }
}
printSquare(5);