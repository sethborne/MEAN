// 01

console.log("01 " + hello);
var hello = 'world';

// 02

var needle = "haystack";
test();

function test() {
    var needle = 'magnet';
    console.log("02 " + needle);
}

// this function will get hoisted - but the global variable (needle = haystack, doesn't clear)

// 03

var brendan = "super cool";

function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log("03 " + brendan);

//this should console log "super cool" noting will happen from the function

// 04

var food = "chicken";
console.log("04 01 " + food);
eat();

function eat() {
    food = "04 02 half-chicken";
    console.log(food);
    var food = "gone";
}

// log chicken
// log half chicken

// 05

// mean();
console.log("05 01 " + food);
var mean = function() {
    food = "01 chicken";
    console.log(food);
    var food = "01 fish";
    console.log(food);
}
console.log("05 02 " + food);

// mean wont run, rest error.  if off, then global from 04 logs.  var function never run.

// 06

console.log(genre);
var genre = "06 01 disco";
rewind();

function rewind() {
    genre = "06 02 rock";
    console.log(genre);
    var genre = "06 03 r&b";
    console.log(genre);
}
console.log(genre);

// log disco (actually this will be undefined)
// log rock
// log r&b
// log disco

// 07

dojo = "san jose";
console.log(dojo);
learn();

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// log san jose
// log seattle
// log burbank
// log san jose