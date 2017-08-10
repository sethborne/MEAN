//closure - function returned from a function
function Outer() {
    var count = 0;

    function inner() {
        count += 1;
        console.log(count);
    }
    return inner;
}

var counter = Outer();

counter();
counter();
counter();
counter();

// console.log(count);