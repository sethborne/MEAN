import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  quotesAll = [
    { quoteContent: 'Creativity is Contagious, Pass it On!', quoteAuthor: 'Albert Einstein', quoteRating: '5' },
    { quoteContent: 'A Day Without Laughter is a Day Wasted', quoteAuthor: 'Charlie Chaplin', quoteRating: '3' },
    { quoteContent: 'You are Only Given a Little Spark of Madness.  You Must not Lose It', quoteAuthor: 'Robin Williams', quoteRating: '7' }
    // { quoteContent: '', quoteAuthor: '', rating: '' },
  ]
}
