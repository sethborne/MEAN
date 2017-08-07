function starString(numVal) {
    let string = "";
    for (let i = 0; i < numVal; i += 1) {
        string += "*";
    }
    return string;
}

let starStringTest1 = starString(10);
console.log("Part 1 - Test 1: " + starStringTest1);
console.log("Part 1 - Test 1 Length: " + starStringTest1.length);
let starStringTest2 = starString(2);
console.log("Part 2 - Test 2: " + starStringTest2);
console.log("Part 2 - Test 2 Length: " + starStringTest2.length);
let starStringTest3 = starString(6);
console.log("Part 3 - Test 3: " + starStringTest3);
console.log("Part 3 - Test 3 Length: " + starStringTest3.length);