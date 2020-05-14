/*
https://www.codewars.com/kata/5a00e05cc374cb34d100000d

Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// TESTS
console.log(reverseSeq(5)); //[5, 4, 3, 2, 1]