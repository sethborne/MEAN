var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello";
    this.name = name;
    this.method = function() {
        console.log("I am a method");
    };
}

var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);

// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty);
// console.log(obj1.newProperty);

// console.log(obj2.anotherProperty);
// console.log(obj2.newProperty);

function Cat(catName) {
    var name = catName;
    this.getName = function() {
        return name;
    };
}

// add method to the cat prototype
Cat.prototype.sayHi = function() {
        console.log('meow');
    }
    // add props to cat proto
Cat.prototype.numLegs = 4;
var muffin = new Cat('Muffin');
var biscuit = new Cat('Biscuit');

muffin.sayHi();
biscuit.sayHi();

console.log(muffin.numLegs);