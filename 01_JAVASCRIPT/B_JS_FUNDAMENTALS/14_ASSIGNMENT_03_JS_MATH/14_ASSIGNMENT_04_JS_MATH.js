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
console.log("First Test Result: " + zeroNegTest1);

let zeroNegTest2 = zeroNegativity([-1, 2, 3]);
console.log("Second Test Result: " + zeroNegTest2);