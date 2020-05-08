/*
https://www.codewars.com/kata/5262119038c0985a5b00029f

Define a function that takes an integer argument and returns logical value true or false depending on if the 
integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
other than 1 and itself.

Example
is_prime(1)  //false
is_prime(2)  //true  
is_prime(-1) //false 

Assumptions:
You can assume you will be given an integer input.

You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a 
solution which does not loop all the way up to n.
*/

function isPrime(num) {
  const limit = Math.sqrt(num);

  if (num < 2) return false;

  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// TESTS
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(12));
console.log(isPrime(73));
