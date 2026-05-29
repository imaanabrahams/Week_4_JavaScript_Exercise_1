// Create a function called 'multiply' that will take in 3 parameters and multiply all 3 numbers together. 
// Note: The arguments passed must NOT be the same number.

function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Numbers must not be the same";
    }
    return num1 * num2 * num3;
}
console.log(multiply(2, 3, 4));   // Output: 24

// Create a function expression called 'convertToSeconds' that takes in a number of minutes as an argument and returns the amount in seconds.

const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));   // Output: 300

// Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsuis.

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(98));    // Output: 36.666666666666664

// Create a function that takes a string as a parameter and returns the reverse of the string.

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript"));   // Output: "tpircSavaJ"

// Create an "isPrime" function that takes a number as a parameter and returns true if the number is prime, and false otherwise.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Testing with 4 numbers
console.log(isPrime(2));   // Output: true
console.log(isPrime(7));   // Output: true
console.log(isPrime(10));  // Output: false
console.log(isPrime(15));  // Output: false