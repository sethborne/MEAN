function zeroNegativity(paramArray) {
    let bool = true;
    for (let i = 0; i < paramArray.length; i += 1) {
        if (paramArray[i] < 0) {
            bool = false;
        }
    }
    return bool;
}

let zeroNegTest1 = zeroNegativity([1, 2, 3]);
console.log("Math 1 - First Test Result: " + zeroNegTest1);

let zeroNegTest2 = zeroNegativity([-1, 2, 3]);
console.log("Math 1 - Second Test Result: " + zeroNegTest2);

function isEven(numVal) {
    // return true if input number is even, false if number is odd
    let bool = true;
    if (numVal % 2 === 1) {
        bool = false;
    } else {
        bool = true;
    }
    return bool;
}

let isEvenTest1 = isEven(2);
console.log("Math 2 - First Test Result: " + isEvenTest1);
let isEvenTest2 = isEven(3);
console.log("Math 2 - Second Test Result: " + isEvenTest2);

function howManyEven(paramArray) {
    let count = 0;
    for (let i = 0; i < paramArray.length; i += 1) {
        if (paramArray[i] % 2 === 0) {
            count += 1;
        }
    }
    return count;
}

let howManyEvenTest1 = howManyEven([1, 2, 3, 4])
console.log("Math 3 - First Test Result: " + howManyEvenTest1);
// 2
let howManyEvenTest2 = howManyEven([1, 3, 5, 7])
console.log("Math 3 - Second Test Result: " + howManyEvenTest2);
// 0

function createDummyArray(numVal) {
    let newArray = [];
    for (let i = 0; i < numVal; i += 1) {
        let randNum = Math.floor(Math.random() * 10);
        newArray.push(randNum);
        // console.log("Test" + i);
    }
    return "[" + newArray + "]";
}

let createDummyArrayTest1 = createDummyArray(10);
console.log("Math 4 - First Test Result: " + createDummyArrayTest1);
// array of 10
let createDummyArrayTest2 = createDummyArray(20);
console.log("Math 4 - Second Test Result: " + createDummyArrayTest2);
// array of 20