let x = "hello world";
let y = "Hello World";

let firstName = "Seth";
let lastName = "Borne";

let message = "Hello, my name is " + firstName + " " + lastName;
console.log(message);

// ES6 - String Interpolation (like C#)

let messageSI = `Hello, my name is ${firstName} ${lastName}`;
// SI respects spaces as put in...
console.log(messageSI);

// Special Chars
let haiku = "Having been erased, \nThe document you're seeking \nMust now be retyped."
console.log(haiku);

let text = 'Hello I\'m Oscar';
console.log(text);

// \t is horizontal tab
// \v is vertical tab
// \u is pass in unicode?

console.log('\u263A    \u2603    \u272f');