class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }



    getName() {
        console.log(`The Ninja's Name is: ${this.name}.`);
        return this;
    }

    showStats() {
        console.log(`Health: ${this.health} | Speed: ${this.speed} | Strength: ${this.strength}`);
        return this;
    }

    drinkSake() {
        let numValHealthInc = 10;
        this.health += numValHealthInc;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    showStats() {
        console.log(`Health: ${this.health} | Speed: ${this.speed} | Strength: ${this.strength} | Wisdom: ${this.wisdom}`);
        return this;
    }

    speakWisdom() {
        super.drinkSake();
        let randIndex = Math.floor(Math.random() * 4);
        let arrayQuote = [
            "Do or Do Not.  There is no Try",
            "The Palest Ink Beats Strongest Memory",
            "I destroy my Enemy When I Make him my Friend",
            "The difference between Stupidity and Genius is that Genius has its limits."
        ]
        console.log(arrayQuote[randIndex]);
        return this;
    }
}

let ninja1 = new Ninja("Ninja Gold");
ninja1.getName();
ninja1.showStats();
ninja1.drinkSake().drinkSake().drinkSake();
ninja1.showStats();

let sensei1 = new Sensei("Master Ninja");
sensei1.showStats();
sensei1.speakWisdom();
sensei1.showStats();