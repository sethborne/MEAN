import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() myNotes;
  @Output() myEvent = new EventEmitter();

  callParent(){
    this.myEvent.emit(7);
  }

  constructor() { }

  ngOnInit() {
  }

}
