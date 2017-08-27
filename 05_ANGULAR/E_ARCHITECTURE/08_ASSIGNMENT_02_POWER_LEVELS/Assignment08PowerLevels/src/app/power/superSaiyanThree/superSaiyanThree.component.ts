import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-superSaiyanThree',
  templateUrl: './superSaiyanThree.component.html',
  styleUrls: ['./superSaiyanThree.component.css']
})
export class SuperSaiyanThreeComponent implements OnInit {
  @Input() thePowerLevel: number;

  SuperSaiyanThreeMultiplier: number = 250;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.thePowerLevel = this.thePowerLevel * this.SuperSaiyanThreeMultiplier;
  }

}
