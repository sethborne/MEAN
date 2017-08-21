// Strings
var myString: string = "This is a string";

console.log(myString)

// numbers
var myNumber: number = 42;
console.log(myNumber);

// Boolean
var myBoolean: boolean = true;
console.log(myBoolean);

// Array of Numbers
var arrayOfNumbers1: number[];
arrayOfNumbers1 = [ 1, 2, 3, 4, 5 ];
console.log(arrayOfNumbers1);

// (Alternate Way) for Array of Numbers
var arrayOfNumbers2: Array<number>
arrayOfNumbers2 = [ 1, 2, 3, 4, 5 ];
// arrayOfNumbers2 = [ "1", "2", "3", "4", "5"]
console.log(arrayOfNumbers2);

// any (assign to any type, and change to any type, anytime)
var anything: any = 7;
console.log(anything);
