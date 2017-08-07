# Assignment: JavaScript Basics II

In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

```javascript
function magic_multiply(x, y){
// --- your code here ---
return x;
}
```

~~### Test 1~~
In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!

```javascript
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10~~
```

~~### Test 2~~

```javascript
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"
```

~~### Test 3~~

```javascript
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
```

Hint: You will need to handle your output differently depending on if x is an array or an integer.

~~### Test 4~~

```javascript
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"
```

~~### Test 5 - Bonus~~

```javascript
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
```

How could we check if an array is an array?