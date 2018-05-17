// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length) 
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, 
  //then return to the console.
  
  /*
  Inputs: string (ex: cardNumber)
  Outputs: string (ex: 'Diner's Club or American Express')
  Contraints: the cardNumber must be a string of numbers 
  Edge: 1. no cardNumber inputted
        2. an input that is not a string of numbers
        3. invalid cardNumber length
        4. an invalid prefix

  Strategy/Transformations:
    //cardNumber = '343456789012345' => 'American Express'
    //We need to keep track of the prefix which is the first 2 numbers of 
    input string
    //We also need to keep track of the length of the cardNumber

  Pseudocode:
    //create a variable to store prefix
    //create another variable to store cardNumber.length
    //if prefix is 34 or 37 and cardNumber.length is 15 digits
      //return 'American Express'
    //else if prefix is 38 or 39 and cardNumber.length i 14 digits
      //return 'Diner's Club'
    //else return 'Invalid'
*/
var detectNetwork = function(cardNumber) {
  var prefix = cardNumber.substring(0, 2);
  var numOfDigits = cardNumber.length;
  var cardNetwork = '';

  if((prefix === '34' || prefix === '37') && numOfDigits === 15) {
    cardNetwork = 'American Express';
  } else if((prefix === '38' || prefix === '39') && numOfDigits === 14) {
    cardNetwork = 'Diner\'s Club';
  } else if (cardNumber.substring(0, 1) === '4' && (numOfDigits === 13 || numOfDigits === 16 || numOfDigits === 19)) {
    cardNetwork = 'Visa';
  } else if  ((prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && numOfDigits === 16) {
    cardNetwork  = 'MasterCard';
  } else if (cardNumber.substring(0, 4) === '6011' && (numOfDigits === 16 || numOfDigits === 19)) {
  	cardNetwork = 'Discover';
  } else {
    cardNetwork = 'Invalid';
  }
  return cardNetwork;
};

  
