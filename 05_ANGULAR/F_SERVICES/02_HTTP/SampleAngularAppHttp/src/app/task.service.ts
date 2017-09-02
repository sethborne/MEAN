import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class TaskService {
  tasks = [];

  constructor(private _http: Http) { }

  retrieveTasks(callback){
    this._http.get('http://localhost.com:1337/tasks').subscribe(
      (response) => {
        this.tasks = response.json();
        callback(this.tasks);
      },
      (err) => {
        console.log("This is Errors");
        console.log(err);
      }
    )
    // return this.tasks;
  }



}
