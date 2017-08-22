import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num: number = 1;

  logNumber(){
    console.log(`The Number is: ${this.num}`);
  }

  increaseNumber(){
    this.num += 1;
    this.logNumber();
  }
}
