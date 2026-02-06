// Basic JavaScript example

function greet(name) {
    return `Hello2, ${name}!`;
}

const userName = "World";
console.log(greet(userName));

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("Sum:", sum);