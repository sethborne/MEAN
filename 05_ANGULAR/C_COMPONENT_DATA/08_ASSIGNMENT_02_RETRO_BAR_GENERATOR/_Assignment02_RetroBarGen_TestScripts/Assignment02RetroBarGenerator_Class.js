var AppComponent = (function () {
    function AppComponent() {
        this.numberOfColors = 25;
        this.numOfTiles = 10;
    }
    // get Random Number and Return it
    AppComponent.prototype.getRandomNumber = function () {
        var min = 0;
        var max = this.numberOfColors - 1;
        var randNum = Math.floor(Math.random() * (max - min + 1) - min);
        return randNum;
    };
    AppComponent.prototype.makeColorArray = function () {
        var arrayOfColors = [];
        var h = 0;
        var s = 100;
        var l = 100;
        for (var i = 0; i < this.numberOfColors; i += 1) {
            var newColorEntry = void 0;
            newColorEntry = "hsl(" + h + ", " + s + "%, " + l + "%)";
            // console.log(newColorEntry);
            arrayOfColors.push(newColorEntry);
            h += 15;
        }
        // console.log(arrayOfColors);
        return arrayOfColors;
    };
    AppComponent.prototype.makeArrayOfRandNumbers = function () {
        var arrayOfRandomNumbers = [];
        for (var i = 0; i < this.numOfTiles; i += 1) {
            var newRandomNum = this.getRandomNumber();
            arrayOfRandomNumbers.push(newRandomNum);
        }
        return arrayOfRandomNumbers;
    };
    AppComponent.prototype.makeRandomColorArray = function () {
        // let arrayOfRandomColors: any[] = [];
        var tempArrayofColors = this.makeColorArray();
        var tempArrayofRandomNumbers = this.makeArrayOfRandNumbers();
        console.log("tempArrayofColors: " + tempArrayofColors);
        for (var i = 0; i < this.numOfTiles; i += 1) {
            this.finalArrayOfColors.push(tempArrayofColors[tempArrayofRandomNumbers[i]]);
        }
        // console.log(`Final Array of Random Colors: ${finalArrayOfColors}`);
        return this.finalArrayOfColors;
    };
    return AppComponent;
}());
var classObj = new AppComponent();
console.log(classObj.getRandomNumber());
console.log(classObj.makeColorArray());
console.log(classObj.makeArrayOfRandNumbers());
console.log(classObj.makeRandomColorArray());
