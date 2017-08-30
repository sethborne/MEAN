import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {
  @Input() quotesAll;
  @Output() addQuoteEvent = new EventEmitter();

  newQuote = {
    quoteContent: "",
    quoteAuthor: "",
    quoteRating: 0
  }

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(quoteFormData){
    console.log(quoteFormData);
    console.log(this.newQuote);
    this.addQuoteEvent.emit(this.newQuote);
    this.newQuote = {
      quoteContent: "",
      quoteAuthor: "",
      quoteRating: 0
    }
  }

}
