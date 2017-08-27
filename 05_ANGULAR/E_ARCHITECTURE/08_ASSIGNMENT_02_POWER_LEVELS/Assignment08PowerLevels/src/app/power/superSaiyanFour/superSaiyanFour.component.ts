import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superSaiyanFour',
  templateUrl: './superSaiyanFour.component.html',
  styleUrls: ['./superSaiyanFour.component.css']
})
export class SuperSaiyanFourComponent implements OnInit {
  @Input() thePowerLevel: number;

  superSaiyanFourMultiplier: number = 500;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.thePowerLevel = this.thePowerLevel * this.superSaiyanFourMultiplier;
  }
}
