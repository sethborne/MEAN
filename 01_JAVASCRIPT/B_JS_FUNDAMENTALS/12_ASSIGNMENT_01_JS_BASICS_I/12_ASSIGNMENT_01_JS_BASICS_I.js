// Basic 01

// Create a variable x as an empty array []. Log this array to your console.

let x = [];
console.log(x);
//should see []

// Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.

x.push('coding');
x.push('dojo');
x.push('rocks');
console.log(x);

// Use .pop() to remove the final element of your array.

x.pop(2);

// Log the final value of x, what is it?
// should be ['coding', 'dojo']
console.log(x);

// Basic 02

//Create a const called y, and store an empty array there. Log this to your console.

const y = [];
console.log(y);
// should log []

//Use .push() to add the number 88 to array y.
y.push(88);
console.log(y);

//What happened?
console.log("What happened?!? - 88 got pushed into the Array!");

//Basic 03

// Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].

let z = [9, 10, 6, 5, -1, 20, 13, 2];

// Print every element to the console.

for (let i = 0; i < z.length; i += 1) {
    console.log("Print All Values: " + i);
}

// Now print every element except the final number.
// exclude with conditional if/else
for (let i = 0; i < z.length; i += 1) {
    if (i === z.length - 1) {

    } else {
        console.log("Ignore Last - First Loop: " + i);
    }
}
// exclude with conditional continue
for (let i = 0; i < z.length; i += 1) {
    if (i === z.length - 1) { continue }
    console.log('Ignore Last - Second Loop: ' + i);
}