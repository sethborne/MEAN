import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-add',
  templateUrl: './quote-add.component.html',
  styleUrls: ['./quote-add.component.css']
})
export class QuoteAddComponent implements OnInit {


  newQuote = {
    quoteContent: "",
    quoteAuthor: "",
    quoteRating: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
