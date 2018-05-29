'use strict';
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Bad Solution below
// function reverse(str) {
// 	//split by every character in the string and put into array.
//   const arr = str.split('');
// 	//reverses array
//   arr.reverse();
// 	//join the array indexes by every character.
//   arr.join('');
// }

//Another Solution
function reverse(str) {
  let reversedStr = '';
	//for of syntax
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
}

// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }
module.exports = reverse;
