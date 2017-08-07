function magicMultiply(val1, val2) {
    result = val1 * val2;
    if (val1 === 0 && val2 === 0) {
        result = "All Inputs 0";
    }
    if (val1.constructor === Array) {
        let newArray = [];
        for (let i = 0; i < val1.length; i += 1) {
            newVal = val1[i] * val2;
            newArray.push(newVal);
        }
        result = "[" + newArray + "]";
    }
    if (val2.constructor === String) {
        result = "Error: Can not multiply by String";
    }
    if (val1.constructor === String) {
        let temp = "";
        for (let i = 0; i < val2; i += 1) {
            temp += val1;
        }
        result = temp;
    }
    return result;
}

let test1 = magicMultiply(5, 2);
console.log("Test1 equals: " + test1);

let test2 = magicMultiply(0, 0);
console.log("Test2 equals: " + test2);

let test3 = magicMultiply([1, 2, 3], 2);
console.log("Test3 equals: " + test3);

let test4 = magicMultiply(7, "three");
console.log("Test4 equals: " + test4);

let test5 = magicMultiply("Brendo", 4);
console.log("Test5 equals: " + test5);