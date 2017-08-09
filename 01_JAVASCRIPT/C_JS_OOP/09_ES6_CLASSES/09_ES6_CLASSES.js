class Dot {
    constructor(x, y) {
            this.x = x;
            this.y = y;
            console.log("You made a Dot!");
        }
        // prototype method
    showLocation() {
            console.log(`This Dot is at x ${this.x} and y ${this.y}`);
        }
        // static method
    static getHelp() {
        console.log(`This is a Dot Class Static Method Message!  A Dot takes a x and a y coordinate, type "New Dot" to create one!`);
    }
}

let dot1 = new Dot(10, 15);
console.log(dot1);
dot1.showLocation();
Dot.getHelp();