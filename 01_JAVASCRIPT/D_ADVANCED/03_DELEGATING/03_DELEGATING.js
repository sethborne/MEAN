// 01
// function printResult(doSomething) {
//     var result = doSomething();
//     console.log(result);
// }
// printResult(function returnFive() {
//     return 5
// })

// 02

function each(arr, callback) {
    for (let i = 0; i < arr.length; i += 1) {
        callback(arr[i])
    }
}

each([1, 2, 3], function(num) { console.log(num + " I am from the Callback Function"); });