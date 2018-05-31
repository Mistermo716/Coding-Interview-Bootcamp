'use strict';
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Solution #1
// function reverseInt(n) {
//   let sign = Math.sign(n);
//   let reversed = n
// 		.toString()
// 		.split('')
// 		.reverse()
// 		.join('');

//   return parseInt(reversed) * sign;
// }

//Solution #2
function reverseInt(n) {
  let sign = Math.sign(n);
  n = n.toString();
  let reversedNum;
  for (let digit of n) {
    reversedNum = digit + reversedNum;
  }
  return parseInt(reversedNum) * sign;
}

module.exports = reverseInt;
