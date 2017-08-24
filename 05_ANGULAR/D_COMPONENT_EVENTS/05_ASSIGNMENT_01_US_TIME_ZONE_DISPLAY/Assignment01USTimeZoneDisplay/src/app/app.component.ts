import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  currDate = new Date().toUTCString();

  // btnSubmitBol: boolean = true;
  // btnGreenBol: boolean = true;
  // btnGreenActiveBol: boolean = false;

  getDateNow(offsetTime: number){
    let hourConvert = 3600;
    let otherConvert = 1000;
    // this.currDate = new Date(Date.now()).toString();
    // console.log(this.currDate);
    console.log("YOU HIT THE FUNCTION");

    if(offsetTime == -7){
      // PDT
      this.currDate = new Date( new Date().getTime() + offsetTime * hourConvert * otherConvert).toUTCString().replace( / GMT$/, " PDT");
      console.log(this.currDate);
      console.log("YOU HIT PDT");

    }
    else if(offsetTime == -6){
      this.currDate = new Date( new Date().getTime() + offsetTime * hourConvert * otherConvert).toUTCString().replace( / GMT$/, " MDT");
      console.log(this.currDate);
      console.log("YOU HIT PDT");
    }
    else if(offsetTime == -5){
      this.currDate = new Date( new Date().getTime() + offsetTime * hourConvert * otherConvert).toUTCString().replace( / GMT$/, " CDT");
      console.log(this.currDate);
      console.log("YOU HIT CDT");
    }
    else if(offsetTime == -4){
      this.currDate = new Date( new Date().getTime() + offsetTime * hourConvert * otherConvert).toUTCString().replace( / GMT$/, " EDT");
      console.log(this.currDate);
      console.log("YOU HIT EDT");
    }

    return this.currDate;
  }

  toggleClass(){
    // this.btnGreenBol = false;
    // this.btnGreenActiveBol = true;
  }

  // PDT = -7
  // MDT = -6
  // CDT = -5
  // EDT = -4

  currDate2 = new Date();
  btnGreenActiveBol: number = 0;

  btnSubmitBol: boolean = true;
  // btnGreenActiveBol: number;

  getCurrDateTime(offsetTime: number){
    this.currDate2 = new Date();

    this.btnGreenActiveBol = offsetTime;
    console.log(this.btnGreenActiveBol);

    if(offsetTime == -7){
      this.currDate2.setHours(this.currDate2.getHours());
      console.log(`In PDT: ${this.currDate2}`);
    }
    else if(offsetTime == -6){
      this.currDate2.setHours(this.currDate2.getHours() + 1);
      console.log(`In MDT: ${this.currDate2}`);
    }
    else if(offsetTime == -5){
      this.currDate2.setHours(this.currDate2.getHours() + 2);
      console.log(`In CDT: ${this.currDate2}`);
    }
    else if(offsetTime == -4){
      this.currDate2.setHours(this.currDate2.getHours() + 3);
      console.log(`In EDT: ${this.currDate2}`);
    }
    else if(offsetTime == 0){
      this.currDate2.setHours(this.currDate2.getHours());
      this.btnGreenActiveBol = null;
    }

    return this.currDate2;
  }
}
