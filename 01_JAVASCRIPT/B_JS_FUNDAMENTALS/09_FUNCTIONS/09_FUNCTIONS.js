function sayName(name) {
    console.log('Hello my name is ' + name);
}

sayName('Morty');

function sayNamePremium(firstName, lastName) {
    console.log('Hello my name is ' + firstName + " " + lastName);
}

sayNamePremium("Rick", "James");
sayNamePremium("Mick", "Jagger");

function sayName2(name) {
    console.log('Hello my name is ' + name);
}
let x = sayName2("Morty");
console.log(x);

function sayName3(name) {
    return "Hello my Name is " + name;
}
let message = sayName3("Steven");
console.log(message);