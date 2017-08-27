import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  // powerLevel: number;
  @Input() powerLevel: number;
  @Output() powerLevelEmitter = new EventEmitter();

  constructor() { }

  triggerPowerLevel(number){
    console.log(`First at PowerComponent ${number}`);
    this.powerLevelEmitter.emit(this.powerLevel);
    console.log(`Second at PowerComponent ${number}`);
  }


  ngOnInit() {
    this.powerLevel = 10;
  }

}
