import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emailList: any[] = [
    {email: "bill@gates.com", importance: true, subject: "New Windows", content: "Windows XI will Launch in Year 2100"},
    {email: "ada@lovelace.com", importance: true, subject: "Programming", content: "Enchantress of Numbers"},
    {email: "john@carmac.com", importance: false, subject: "Update Algo", content: "New Algorithm for Shadow Volumes"},
    {email: "gabe@newel.com", importance: false, subject: "HL3!", content: "Just Kidding..."}
  ];
}

