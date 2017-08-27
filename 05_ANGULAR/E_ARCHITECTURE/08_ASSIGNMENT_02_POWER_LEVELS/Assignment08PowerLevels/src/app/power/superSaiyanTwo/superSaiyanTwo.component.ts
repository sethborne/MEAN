import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-superSaiyanTwo',
  templateUrl: './superSaiyanTwo.component.html',
  styleUrls: ['./superSaiyanTwo.component.css']
})
export class SuperSaiyanTwoComponent implements OnInit {
  @Input() thePowerLevel: number;

  superSaiyanTwoPowerMultiplier: number = 150;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.thePowerLevel = this.thePowerLevel * this.superSaiyanTwoPowerMultiplier;
  }

}
