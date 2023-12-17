/* 
Filename: complex_procedure.js

Description: 
This JavaScript code demonstrates a complex procedure for generating a Fibonacci sequence up to a given number using recursion and memoization.
The code includes helper functions, input validation, and error handling.

Usage:
To execute the code, call the "getFibonacciSequence" function with a positive integer as an argument. The function will return the Fibonacci sequence.

Example:
console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8]
*/

// Memoization object to store calculated Fibonacci values
const memo = {};

/**
 * Helper function to calculate Fibonacci value based on index
 * @param {number} n - Fibonacci index
 * @returns {number} - Fibonacci value at given index
 */
function fibonacci(n) {
  if (n <= 1) return n;

  // Check memoization object for previously calculated Fibonacci values
  if (memo[n]) return memo[n];

  // Calculate Fibonacci recursively and store in memoization object
  const result = fibonacci(n - 1) + fibonacci(n - 2);
  memo[n] = result;

  return result;
}

/**
 * Generates a Fibonacci sequence up to a given number
 * @param {number} limit - Upper limit of the Fibonacci sequence
 * @returns {number[]} - Fibonacci sequence up to the limit
 */
function getFibonacciSequence(limit) {
  if (typeof limit !== 'number' || limit < 1 || !Number.isInteger(limit)) {
    throw new Error('Invalid input. Please provide a positive integer as the limit.');
  }

  const fibSequence = [];
  let i = 0;

  while (fibonacci(i) <= limit) {
    fibSequence.push(fibonacci(i));
    i++;
  }

  return fibSequence;
}

// Example usage:
console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8]