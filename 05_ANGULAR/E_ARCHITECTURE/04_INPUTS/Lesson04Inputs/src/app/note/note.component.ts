import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes = [
    {title: "First1 Note"},
    {title: "Second Note"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
