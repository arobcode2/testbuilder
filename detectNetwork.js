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

Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
*/

// var detectNetwork = function(cardNumber) {
//   var prefix = cardNumber.substring(0, 2);
//   var numOfDigits = cardNumber.length;
//   var cardNetwork = '';


//   if((prefix === '34' || prefix === '37') && numOfDigits === 15) {
//     cardNetwork = 'American Express';
//     } else if((prefix === '38' || prefix === '39') && numOfDigits === 14) {
//       cardNetwork = 'Diner\'s Club';
//     } else if ((cardNumber.substring(0, 4) !== '4903' && cardNumber.substring(0, 4) !== '4905' && cardNumber.substring(0, 4) !== '4911' && cardNumber.substring(0, 4) !== '4936') && cardNumber.substring(0, 1) === '4' && (numOfDigits === 13 || numOfDigits === 16 || numOfDigits === 19)) {
//       cardNetwork = 'Visa';
//     } else if  ((prefix === '51' || prefix === '52' || prefix === '53' || prefix === '54' || prefix === '55') && numOfDigits === 16) {
//       cardNetwork  = 'MasterCard';
//     } else if ((cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 3) === '644' || cardNumber.substring(0, 3) === '645' || cardNumber.substring(0, 3) === '646' || cardNumber.substring(0, 3) === '647' || cardNumber.substring(0, 3) === '648' || cardNumber.substring(0, 3) === '649' || prefix === '65' ) && (numOfDigits === 16 || numOfDigits === 19)) {
//       cardNetwork = 'Discover';
//     } else if ((cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') && (numOfDigits === 12 || numOfDigits === 13 || numOfDigits === 14 || numOfDigits === 15 || numOfDigits === 16 || numOfDigits === 17 || numOfDigits === 18 || numOfDigits === 19)) {
//       cardNetwork = 'Maestro';
//     } else if((cardNumber.substring(0, 4) === '4903' || cardNumber.substring(0, 4) === '4905' || cardNumber.substring(0, 4) === '4911' || cardNumber.substring(0, 4) === '4936' || cardNumber.substring(0, 4) === '6333' || cardNumber.substring(0, 4) === '6759'|| cardNumber.substring(0, 6) === '564182' || cardNumber.substring(0, 6) === '633110') && (numOfDigits === 16 || numOfDigits === 18 || numOfDigits === 19)) {
//       cardNetwork = 'Switch';    
//   } else {
//     var chinaUnionPrefixes = [];
//     for(var i = 622126; i <= 622925; i++) {
//       chinaUnionPrefixes.push(JSON.stringify(i));
//     };
//     for(var i = 624; i <= 626; i++) {
//       chinaUnionPrefixes.push(JSON.stringify(i));
//     };
//     for(var i = 6282; i <= 6288; i++) {
//       chinaUnionPrefixes.push(JSON.stringify(i));
//     };

//     var prefixSix = cardNumber.substring(0, 6);
//     var prefixThree = cardNumber.substring(0, 3);
//     var prefixFour = cardNumber.substring(0, 4);
//     var cardNetwork = '';

//     function checkAvailability(chinaUnionPrefixes, prefixSix, prefixFour, prefixThree) {
//       if(cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
//         if(chinaUnionPrefixes.includes(prefixSix)) {
//           cardNetwork = 'China UnionPay';
//         } else if (chinaUnionPrefixes.includes(prefixThree)) {
//           cardNetwork = 'China UnionPay';
//         } else if (chinaUnionPrefixes.includes(prefixFour)) {
//           cardNetwork = 'China UnionPay';
//         }
//         return cardNetwork;
//       }
//     }

//     checkAvailability(chinaUnionPrefixes, prefixSix, prefixFour,prefixThree);
//   }
//   return cardNetwork;
// };

var detectNetwork = function(cardNumber) {
  var prefix = parseInt(cardNumber.substring(0, 4));
  var cardNetwork = '';

  if(prefix <= 3700) {
    cardNetwork = 'American Express';
  } else if(prefix <= 3999) {
    cardNetwork = 'Diner\s Club';
  } else if ((prefix !== 4903 && prefix !== 4905 && prefix !== 4911 && prefix !== 4936) && prefix <= 4999) {
    cardNetwork = 'Visa';
  } else if(prefix >= 5100 && prefix <= 5599) {
    cardNetwork = 'MasterCard';
  } else if(prefix === 6011 || prefix >= 6440 && prefix <= 6599){
    cardNetwork = 'Discover';
  } else if(prefix === 5018 || prefix === 5020 || prefix === 5038 || prefix === 6304) {
    cardNetwork = 'Maestro';
  } else if(prefix >= 6221 && prefix <= 6288) {
    cardNetwork = 'China UnionPay';
  } else {
    cardNetwork = 'Switch';
  }
  return cardNetwork;
};


