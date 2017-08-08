function Ninja(name) {
    this.name = name;
    this.health = 100;
    var privateSpeed = 3;
    var privateStrength = 3;

    this.sayName = function() {
        console.log(`Hello my name is ${this.name}.`);
    }
    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${privateSpeed}, Strength: ${privateStrength}`);
    }
    this.drinkSake = function() {
        this.health += 10;
    }
}

var ninja1 = new Ninja("Hyabusa");
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
console.log(ninja1.health);