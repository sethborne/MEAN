for (let i = 0; i < 7; i += 1) {
    console.log('hello ' + i);
}

let total = 0;
for (let i = 10; i > 0; i -= 1) {
    total = total + i;
}
console.log(total);

let num1 = 1;
while (num1 < 6) {
    console.log("I am counting! The number is " + num1);
    num1 += 1;
}
console.log('Done, Goodbye!');

let num2 = 3;
do {
    console.log("I am counting Loop2! The number is " + num2);
    num2 += 1;
}
while (num2 < 6);
console.log('Done, Loop2. Goodbye!');

let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord H'];
for (let i = 0; i < names.length; i += 1) {
    if (names[i] === 'Kadie') { continue };
    console.log(names[i]);
}