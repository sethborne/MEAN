import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users: User[] = [];
  // patt = new RegExp('[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+');
  // patt: string = '([/\\w-/\\.]+@([/\\w-]+/\\.)+[/\\w-]{2,4})?'
  // patt2: string = '[/\\w-\.]+@([/\\w-]+/\\.)+[/\\w-]{2,4})?'
  //  -- /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  onSubmit(){
    this.users.push(this.user);
    this.user = new User();
  }
}


// pattern = ^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$

// required pattern=" ^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-zA-Z0–9-.]+$ "

// pattern = ^([/\\w-\.]+@([/\\w-]+\.)+[\w-]{2,4})?$
