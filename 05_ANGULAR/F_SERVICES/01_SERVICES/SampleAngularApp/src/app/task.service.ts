import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  //data
  tasks = [ "Drink Coffee", "Drink Tea", "Drink Beer", "Build a Web App"]

  constructor() { }

  retrieveTasks(){
    return this.tasks;
  }

  addTask(task){
    this.tasks.push(task)
  }

}
