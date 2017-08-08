var Ninja = function Ninja(name) {
    this.name = name;
    this.health = 100;
    var privateSpeed = 3;
    var privateStrength = 3;

    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${privateSpeed}, Strength: ${privateStrength}`);
        return this;
    }
}
Ninja.prototype.sayName = function() {
    console.log(`Hello my name is ${this.name}.`);
    return this;
}

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
}

var ninja1 = new Ninja("Hyabusa");
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake();
// ninja1.drinkSake();
console.log(ninja1.health);