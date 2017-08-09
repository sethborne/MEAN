var Ninja = function Ninja(name) {
    this.name = name;
    this.health = 100;
    var privateSpeed = 3;
    var privateStrength = 3;

    this.showStats = function() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${privateSpeed}, Strength: ${privateStrength}`);
        return this;
    }

    this.kick = function(ninjaObj) {
        if (ninjaObj instanceof Object) {
            // console.log('Yes - this is an instance');
            var kickCalcNum = privateStrength * 15;
            // console.log(kickCalcNum);
            ninjaObj.health -= kickCalcNum;
            console.log(`${this.name} kicked ${ninjaObj.name} in the face. ${ninjaObj.name} has lost ${kickCalcNum} health`);
        } else {
            console.log(`${this.name} kicked hard, but seems to have missed.  Was ${this.name} actually fighting another Ninja?`);
        }
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

Ninja.prototype.punch = function(ninjaObj) {
    if (ninjaObj instanceof Object) {
        var punchCalcNum = 5;
        ninjaObj.health -= punchCalcNum;
        console.log(`${this.name} punched ${ninjaObj.name} in the face. ${ninjaObj.name} has lost ${punchCalcNum} Health!`);
        console.log(`Attacking Ninja: ${this.name}'s Health is: ${this.health}`);
        console.log(`Attacked Ninja: ${ninjaObj.name}'s Health is: ${ninjaObj.health}`);
        return this;
    } else {
        console.log(`${this.name} threw a mighty punch, but seems to have missed?  Was ${this.name} actually fighting another Ninja?  The World will never know...`);
    }
}

var blueNinja = new Ninja("Steven Jobs");
var redNinja = new Ninja("Bill Gates");
blueNinja.punch(redNinja).punch(redNinja);
redNinja.kick(blueNinja);
var yellowNinja = "Tim";
redNinja.kick(yellowNinja);
redNinja.punch(yellowNinja);