// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:
// > printNumbers(1, 10)
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Write two versions of the above function. One using a while loop and the other using a for loop.


// while loop

function printNumbers (start, end) {
  count = 0
  while (count < end) {
    count ++;
    console.log(count)
  }
}
printNumbers(1, 10);


// for loop

function printNumbers (start, end) {
  for (var count=start; count<=end; count++) {
    console.log(count);
  }
}
printNumbers(1, 10);