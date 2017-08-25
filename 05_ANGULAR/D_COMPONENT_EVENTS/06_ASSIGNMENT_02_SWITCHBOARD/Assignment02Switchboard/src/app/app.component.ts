import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  arrayOfSwitches: boolean[] = [];
  lengthOfArray: number = 15;

  makeToggleArray(){
    for(let i = 0; i < this.lengthOfArray; i += 1){
      this.arrayOfSwitches.push(true);
    }
    console.log(this.arrayOfSwitches);
    return this.arrayOfSwitches;
  }

  toggleSwitch(idx){
    this.arrayOfSwitches[idx] = !this.arrayOfSwitches[idx];
  }

  ngOnInit(){
    this.makeToggleArray();
  }
}
