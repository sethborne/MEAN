import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotesAll;
  @Output() deleteQuoteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quoteData){
    console.log(`Vote Up: `);
    console.log(quoteData);
    quoteData.quoteRating += 1;
    console.log(quoteData);
  }

  voteDown(quoteData){
    console.log(`Vote Down:`);
    console.log(quoteData);
    quoteData.quoteRating -= 1;
    console.log(quoteData);
  }

  voteDelete(quoteData){
    console.log(`Delete Vote:`);
    console.log(quoteData);
    this.deleteQuoteEvent.emit(quoteData);

  }

}
