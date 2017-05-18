// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total 
// as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.

function totalAmount(amount, service) {
  if (service == 'good') {
    console.log("Total amount: $" + amount * 1.20);
  } else if (service == 'fair') {
    console.log("Total amount: $" + amount * 1.15);
  } else if (service == 'bad') {
    console.log("Total amount: $" + amount * 1.10);
  }
}
totalAmount(100, 'good');
totalAmount(40, 'fair');

// with tipAmount as sub-task

function tipAmount(amount, service) {
  if (service == 'good') {
    console.log("Tip amount: $" + amount * .20);
    console.log("Total amount: $" + amount * 1.20);
  } else if (service == 'fair') {
    console.log("Tip amount: $" + amount * .15);
    console.log("Total amount: $" + amount * 1.15);
  } else if (service == 'bad') {
    console.log("Tip amount: $" + amount * .10);
    console.log("Total amount: $" + amount * 1.10);
  }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');