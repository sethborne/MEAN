import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'This is Pipes!';
  myNumber: number = 1.23;

  user: { firstName: string, lastName: string} = {
    firstName: "Seth",
    lastName: "Borne"
  };

  today = new Date();
}
