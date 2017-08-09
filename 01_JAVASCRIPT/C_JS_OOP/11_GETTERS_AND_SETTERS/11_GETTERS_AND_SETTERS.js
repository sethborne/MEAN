class Pizza {
    constructor(radius, numOfSlices) {
        this.radius = radius;
        this._numOfSlices = numOfSlices;
    }
    get slices() {
        return this._numOfSlices;
    }
    set slices(slices) {
        this._numOfSlices = numOfSlices;
    }
}

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    showLocation(x, y) {
        console.log(`The Location of the Circle is: x ${this.x}, y ${this.y}`);
    }
}

let circle1 = new Circle(1, 2, 5);
console.log(circle1.diameter);
circle1.showLocation();