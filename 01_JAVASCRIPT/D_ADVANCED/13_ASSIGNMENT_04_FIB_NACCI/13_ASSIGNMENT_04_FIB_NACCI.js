function fib() {
    //vars
    var prev = 0;
    var next = 1;

    function nacci() {
        // do something here
        let sum = prev + next;
        console.log(`the Prev is: ${prev} | the Next is: ${next} | The Sum is: ${sum}`);
        prev = next;
        next = sum;
    }
    return nacci;
}

var fibCounter = fib();

fibCounter(); // 1
fibCounter(); // 1
fibCounter(); // 2
fibCounter(); // 3
fibCounter(); // 5
fibCounter(); // 8