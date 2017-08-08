// console.log(this);

function Person(name, age) {
    // fix
    var self = this;
    var privateVariable = "This Variable is Private";
    var privateMethod = function() {
        // console.log(this); // this logs the entire window
        //fix
        console.log("This is a Private Method for " + self.name);
        console.log(self);
    }

    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old!`);
        console.log(`Also my privateVariable says: "${privateVariable}"`);
        privateMethod();
    }
}

var joe = new Person("Joe", 23);
joe.greet();
// console.log(joe.privateVariable);