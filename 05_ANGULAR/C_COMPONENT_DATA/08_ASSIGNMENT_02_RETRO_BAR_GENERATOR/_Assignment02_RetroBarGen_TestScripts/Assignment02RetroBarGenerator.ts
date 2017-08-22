// class
// random number generator, will give a random number for one of 25 colors
let min: number = 0;
let max: number = 24;
function randomNumber(min, max){
    let randNum: number = Math.floor(Math.random() * (max - min + 1)  + min);
    return randNum;
}

// color Array - makes an array of 25 hsl colors
let arrayColor: any[] = [];
// let count: number = 0;
let h: number = 0;
let s: number = 100;
let l: number = 100;
// let l: string = "100%";
for(let i = 0; i < 25; i += 1){
    let newArrayValue: string;
    // newArrayValue = [ count, h, s, l];
    newArrayValue = `hsl(${h}, ${s}%, ${l}%)`;
    arrayColor.push(newArrayValue);
    // count += 1;
    h += 15;
}
console.log(arrayColor);
// return arrayColor;


// how many tiles
let numOfTiles: number = 10;
// array of RandomNumbers
let arrayTemp: number[] = [];

for(let i = 0; i < numOfTiles; i += 1){
    let newRandomNum: number = randomNumber(min, max);
    arrayTemp.push(newRandomNum)
}

// array of random colors
let randomColorArray: any[] = [];

for(let i = 0; i < arrayTemp.length; i += 1){
    // use arrayTemp value to push in corresponding arraycolor index to random color array
    randomColorArray.push(arrayColor[arrayTemp[i]]);
}
console.log(randomColorArray);
