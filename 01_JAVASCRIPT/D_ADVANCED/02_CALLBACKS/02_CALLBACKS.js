// 01

// let ninja = 'Libby';
// setTimeout(function() {
//     console.log("Callback " + ninja);
// }, 2000);
// console.log("Global " + ninja);

// 02
// console.log("NOW: ");
// console.log("Declaring and Assigning Variable 'Ninja'.");
// let ninja = "Libby";

// setTimeout(function myCallbackFunction() {
//     console.log("LATER: ");
//     console.log(ninja, "Ninja pre = LATER");
// }, 2000);

// console.log("Printing Ninja NOW Value.");
// console.log(ninja, "Ninja pre = NOW");

// 03
// let a = 2;
// let b = function() { console.log("Callback Function"); };

// function doSomething(x) {
//     console.log(typeof(x));
// }

// doSomething(a);
// doSomething(b);

// 04
// function doSomething(possibleCallback) {
//     if (typeof(possibleCallback) === "function") {
//         console.log("Possible Callback is a Callback Function!");
//         possibleCallback();
//     } else {
//         console.log("possibleCallback: ", possibleCallback, " is not a callback function.");
//     }
// }

// doSomething(function myCallback() { console.log("Yes, I am a Callback!") });
// doSomething("String");

// 05
// function makePasta(pasta, makeSauce) {
//     console.log("Boiling Water");
//     console.log("Putting " + pasta + " pasta In the Water");
//     console.log("Pasta is done!");
//     return pasta + "Pasta! Voila!";
// }

// makePasta("Penne");
// makePasta("Farfalle");

// 06

// function makePasta(pasta, makeSauce) {
//     console.log("Boiling Water");
//     console.log("Putting " + pasta + " pasta In the Water");
//     // make sauce
//     let sauce = makeSauce();
//     console.log('Mixing Sauce');
//     // after sauce
//     console.log("Pasta is done!");
//     return pasta + " Pasta with " + sauce + " sauce! Voila!";
// }

// function makePesto() {
//     console.log("Making Pesto");
//     return "Pesto";
// }

// function makeAlfredo() {
//     console.log("Making Alfredo");
//     return "Alfredo";
// }

// console.log(makePasta("Penne", makePesto));
// console.log(makePasta("Farfalle", makeAlfredo));