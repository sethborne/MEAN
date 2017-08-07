let x = [1, 2, 3];
let y = ['blue', 'yellow', 'magical unicorns'];
let z = [1, [], null, 'hello world'];

console.log(x);
console.log(y);
console.log(z);

let x1 = [1, 2, 3, 4];
x1.pop();
console.log(x1);

let y1 = ['blue', 'yellow', 'magical unicorns'];
console.log(y1[1]);

let z1 = [1, [], null, 'hello world'];
console.log(z1.length);

let x2 = [];
x2[34] = 'Hello World';
console.log(x2);

// can you ID? Yeah you know me!

let x3 = [1, 2, 3];
if (x3.constructor === Array) {
    console.log('Yes!  X is an Array!!!');
} else {
    console.log('Ooops!  X is not an Array.  :(');
}