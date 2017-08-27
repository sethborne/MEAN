import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
  @Input() thePowerLevel: number;

  // saiyanPowerLevel: number;
  saiyanPowerMultiplier: number = 10;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.thePowerLevel = this.thePowerLevel * this.saiyanPowerMultiplier;
  }

}
