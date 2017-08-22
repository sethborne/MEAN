// random number generator, will give a random number for one of 25 colors
var min = 0;
var max = 24;
function randomNumber(min, max) {
    var randNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randNum;
}
// color Array - makes an array of 25 hsl colors
var arrayColor = [];
// let count: number = 0;
var h = 0;
var s = 100;
var l = 100;
// let l: string = "100%";
for (var i = 0; i < 25; i += 1) {
    var newArrayValue = void 0;
    // newArrayValue = [ count, h, s, l];
    newArrayValue = "hsl(" + h + ", " + s + "%, " + l + "%)";
    arrayColor.push(newArrayValue);
    // count += 1;
    h += 15;
}
console.log(arrayColor);
// return arrayColor;
// how many tiles
var numOfTiles = 10;
// array of RandomNumbers
var arrayTemp = [];
for (var i = 0; i < numOfTiles; i += 1) {
    var newRandomNum = randomNumber(min, max);
    arrayTemp.push(newRandomNum);
}
// array of random colors
var randomColorArray = [];
for (var i = 0; i < arrayTemp.length; i += 1) {
    // use arrayTemp value to push in corresponding arraycolor index to random color array
    randomColorArray.push(arrayColor[arrayTemp[i]]);
}
console.log(randomColorArray);
