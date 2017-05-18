// Write a function splitAmount that takes the bill amount and the level of service, and the 
// number of people to split the bill between. It will return the final amount for each person.

function splitAmount(amount, service, people) {
  if (service == 'good') {
    console.log("Spilt amount: $" + amount * 1.20 / people)
  } else if (service == 'fair') {
    console.log("Split amount: $" + amount * 1.15 / people);
  } else if (service == 'bad') {
    console.log("Split amount: $" + amount * 1.10 / people);
  }
}
splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2);

// With tip amount and total amount sub-tasks:

function splitAmount(amount, service, people) {
  if (service == 'good') {
    console.log("Tip amount: $" + amount * .20);
    console.log("Total amount: $" + amount * 1.20);
    console.log("Spilt amount: $" + amount * 1.20 / people)
  } else if (service == 'fair') {
    console.log("Tip amount: $" + amount * .15);
    console.log("Total amount: $" + amount * 1.15);
    console.log("Split amount: $" + amount * 1.15 / people);
  } else if (service == 'bad') {
    console.log("Tip amount: $" + amount * .10);
    console.log("Total amount: $" + amount * 1.10);
    console.log("Split amount: $" + amount * 1.10 / people);
  }
}
splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2);