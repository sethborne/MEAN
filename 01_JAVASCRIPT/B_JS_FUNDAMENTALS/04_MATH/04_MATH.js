// Test Math Random
// gives random number between 0 (inclusive) and 1 (exclusive)

let x = Math.floor(Math.random() * 20);
console.log(x);
// between 0 and 19

let y = Math.floor(Math.random() * 21);
console.log(y);
// between 0 and 20

let z = Math.floor(Math.random() * 20) + 1;
console.log(z);
// between 1 and 20

// Modulus
let x1 = 11;
let y1 = 5;
let z1 = x1 % y1;
// should be 1
console.log(z1);

let x2 = 16;
console.log(x2 % 2);
// should be 0

let y2 = 17;
console.log(y2 % 2);
// should be 1