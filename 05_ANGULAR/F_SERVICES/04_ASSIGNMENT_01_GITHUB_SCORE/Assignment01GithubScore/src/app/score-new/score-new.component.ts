import { Component, OnInit } from '@angular/core';
import { UsernameService } from "./../username.service";

@Component({
  selector: 'app-score-new',
  templateUrl: './score-new.component.html',
  styleUrls: ['./score-new.component.css']
})
export class ScoreNewComponent implements OnInit {
  username: String = "";

  constructor(private _usernameService: UsernameService){
    this.username = this._usernameService.getUsername();
    console.log(`At Score-New:  ${this.username}`);
  }

  onFormSubmit(){
    this.username = this.username;
    console.log(this.username);
  }

  ngOnInit() {
  }

}
