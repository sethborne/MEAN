import { Component } from '@angular/core';
// import { Power } from './power';
// import { PowerComponent } from './power/power.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(){
  }

  dataFromAppPower(powerLevel){
    console.log(`PowerLevel At App Level ${powerLevel}`);
  }
}
