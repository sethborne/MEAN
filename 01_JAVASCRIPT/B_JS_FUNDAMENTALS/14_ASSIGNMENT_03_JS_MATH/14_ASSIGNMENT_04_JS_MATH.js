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