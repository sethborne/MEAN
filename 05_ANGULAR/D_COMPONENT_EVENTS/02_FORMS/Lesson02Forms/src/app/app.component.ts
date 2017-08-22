import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  user = {
    firstName: "",
    lastName: ""
  }
  onSubmit(){
    console.log("Hello");
    console.log(this.user);
    // point to another object
    this.user = {
      firstName: "",
      lastName: ""
    }
  }
}
