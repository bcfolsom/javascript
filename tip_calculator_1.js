function tipAmount(amount, service) {
  if (service == 'good') {
    console.log("Tip Amount: " + amount * .20);
  } else if (service == 'fair') {
    console.log("Tip Amount: " + amount * .15);
  } else if (service == 'bad') {
    console.log("Tip amount: " + amount * .10);
  }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');