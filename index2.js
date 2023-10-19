const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If the number is divisible by any integer, it's not prime
        }
    }
    return true;
}

function sumPrimesInRange(start, end) {
    let sum = 0;
    for (let number = start; number <= end; number++) {
        if (isPrime(number)) {
            sum += number;
        }
    }
    return sum;
}

rl.question("Enter the starting number: ", (startInput) => {
    rl.question("Enter the ending number: ", (endInput) => {
        const sumOfPrimes = sumPrimesInRange(parseInt(startInput), parseInt(endInput));
        console.log("The sum of prime numbers in the range", startInput, "to", endInput, "is", sumOfPrimes);
        rl.close();
    });
});
