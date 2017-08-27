import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './superSaiyan.component.html',
  styleUrls: ['./superSaiyan.component.css']
})
export class SuperSaiyanComponent implements OnInit {
  @Input() thePowerLevel: number;

  // saiyanPowerLevel: number;
  superSaiyanPowerMultiplier: number = 90;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.thePowerLevel = this.thePowerLevel * this.superSaiyanPowerMultiplier;
  }

}
