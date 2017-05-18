// Write a function tipAmount that is given the bill amount and the level of service 
// (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20%
// fair -> 15%
// bad -> 10%

function tipAmount(amount, service) {
  if (service == 'good') {
    console.log("Tip amount: $" + amount * .20);
  } else if (service == 'fair') {
    console.log("Tip amount: $" + amount * .15);
  } else if (service == 'bad') {
    console.log("Tip amount: $" + amount * .10);
  }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');