function isPrime(number){
    if (number) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findNextPrime(input) {
    let nextNumber = input + 1;
    while (true) {
        if (isPrime(nextNumber)) {
        }
        nextNumber++;
    }
}

const input = 13;
const nextPrime = findNextPrime(input);
console.log("bilangan prime setelah", input, " adalah", nextPrime)