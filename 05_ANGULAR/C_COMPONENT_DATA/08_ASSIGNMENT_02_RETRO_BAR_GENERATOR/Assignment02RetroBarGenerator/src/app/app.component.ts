import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  finalArrayOfColors: string[] = [];
  numberOfColors: number = 25;
  // change this to get more tiles
  numOfTiles: number = 150;
  // get Random Number and Return it
  getRandomNumber(): number {
    let min: number = 0;
    let max: number = this.numberOfColors - 1;
    let randNum: number = Math.floor(Math.random() * (max - min + 1) - min);
    return randNum;
  }

  makeColorArray(): string[] {
    let arrayOfColors: string[] = [];

    //quick changes for colors
    let h: number = 50;
    let s: number = 85;
    let l: number = 40;

    for (let i = 0; i < this.numberOfColors; i += 1) {
        let newColorEntry: string;
        // newColorEntry = `hsl(${h}, ${s}%, ${l}%)`;
        newColorEntry = "hsl(" + h + ", " + s + "%, " + l + "%)";
        // console.log(newColorEntry);
        arrayOfColors.push(newColorEntry);
        h += 15;
    }
    // console.log(arrayOfColors);
    return arrayOfColors;
  }

  makeArrayOfRandNumbers(): number[] {
    let arrayOfRandomNumbers: number[] = [];
    for(let i = 0; i < this.numOfTiles; i += 1){
        let newRandomNum: number = this.getRandomNumber();
        arrayOfRandomNumbers.push(newRandomNum);
    }
    return arrayOfRandomNumbers;
  }

  makeRandomColorArray(): string[] {
    // let arrayOfRandomColors: any[] = [];
    let tempArrayofColors: any[] = this.makeColorArray();
    let tempArrayofRandomNumbers: number[] = this.makeArrayOfRandNumbers();
    console.log(`tempArrayofColors: ${tempArrayofColors}`);
    for(let i = 0; i < this.numOfTiles; i += 1){
      this.finalArrayOfColors.push(tempArrayofColors[tempArrayofRandomNumbers[i]]);
    }
    console.log(`Final Array of Random Colors: ${this.finalArrayOfColors}`);
    return this.finalArrayOfColors;
  }

  ngOnInit(){
    // this should call my function?
    this.makeRandomColorArray();
  }
}
