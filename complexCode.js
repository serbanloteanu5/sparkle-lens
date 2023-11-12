/*
   Filename: complexCode.js
   
   Description: This code implements a complex and elaborate algorithm that performs various mathematical calculations. It incorporates advanced concepts and techniques to handle data manipulation, recursion, and error handling.
*/

// Utility function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to calculate the factorial of a number
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Function to compute the nth Fibonacci number
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Function to sort an array using bubble sort algorithm
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Class representing a complex number
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(complex) {
        return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
    }

    multiply(complex) {
        const real = this.real * complex.real - this.imaginary * complex.imaginary;
        const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
        return new ComplexNumber(real, imaginary);
    }
}

// Main entry point of the program
function main() {
    const primes = [];
    const numbers = [6, 2, 9, 1, 5, 8, 3];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primes.push(numbers[i]);
        }
    }

    console.log("Prime numbers:", primes);

    const sortedNumbers = bubbleSort(numbers);
    console.log("Sorted numbers:", sortedNumbers);

    const num = 5;
    const result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);

    const fibonacciNumber = 8;
    const fibResult = fibonacci(fibonacciNumber);
    console.log(`The ${fibonacciNumber}th Fibonacci number is ${fibResult}`);

    const complexNum1 = new ComplexNumber(2, 3);
    const complexNum2 = new ComplexNumber(-1, 5);
    const sum = complexNum1.add(complexNum2);
    console.log(`Sum: ${sum.real} + ${sum.imaginary}i`);

    const product = complexNum1.multiply(complexNum2);
    console.log(`Product: ${product.real} + ${product.imaginary}i`);
}

// Execute the main function
main();