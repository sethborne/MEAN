// object constructor is a function that returns objects

function personConstructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old!`);
    }
}

var seth = new personConstructor('Seth', 452);
console.log(seth);
seth.greet();

var slim = new personConstructor('Slim', 33);
slim.greet = function() {
    console.log(`Hello my name is ${this.name} Shady`);
}
slim.greet();