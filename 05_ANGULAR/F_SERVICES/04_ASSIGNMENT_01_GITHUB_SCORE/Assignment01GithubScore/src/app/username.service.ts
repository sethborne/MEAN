import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UsernameService {
  username: String = "";

  constructor(private _http: Http) { }

  // onFormSubmit(){
  //   this.username = this.username;
  //   console.log(this.username);
  // }

  getUsername(){
    if(this.username){
      console.log(this.username);
      return this.username;
    }
    else{
      console.log(`No User Found`);
    }
  }

}
