class AppComponent {
    finalArrayOfColors: any[];
    numberOfColors: number = 25;
    numOfTiles: number = 10;
    // get Random Number and Return it
    getRandomNumber(): number {
        let min: number = 0;
        let max: number = this.numberOfColors - 1;
        let randNum: number = Math.floor(Math.random() * (max - min + 1) - min);
        return randNum;
    }

    makeColorArray(): any[] {
        let arrayOfColors: any[] = [];

        let h: number = 0;
        let s: number = 100;
        let l: number = 100;

        for (let i = 0; i < this.numberOfColors; i += 1) {
            let newColorEntry: string;
            newColorEntry = `hsl(${h}, ${s}%, ${l}%)`;
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
    
    makeRandomColorArray(): any[] {
        // let arrayOfRandomColors: any[] = [];
        let tempArrayofColors: any[] = this.makeColorArray();
        let tempArrayofRandomNumbers: number[] = this.makeArrayOfRandNumbers();
        // console.log(`tempArrayofColors: ${tempArrayofColors}`);
        for(let i = 0; i < this.numOfTiles; i += 1){
            this.finalArrayOfColors.push(tempArrayofColors[tempArrayofRandomNumbers[i]]);
        }
        // console.log(`Final Array of Random Colors: ${finalArrayOfColors}`);
        return this.finalArrayOfColors;
    }
}



let classObj = new AppComponent();

console.log(classObj.getRandomNumber());
console.log(classObj.makeColorArray());
console.log(classObj.makeArrayOfRandNumbers());
console.log(classObj.makeRandomColorArray());


