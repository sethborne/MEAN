import { Component, OnInit, Input } from '@angular/core';
import { PowerComponent } from '../../power/power.component';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  @Input() thePowerLevel: number;

  constructor() { }

  ngOnInit() {
    console.log(this.thePowerLevel);
  }

}
