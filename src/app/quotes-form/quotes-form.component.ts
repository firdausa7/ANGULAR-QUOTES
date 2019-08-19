import { QuotesDetailComponent } from './../quotes-detail/quotes-detail.component';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuotes = new Quotes(0, "", "", "", new Date());

  // @Input() newQuote: Quotes;
  @Output() addQuotes = new EventEmitter<Quotes>();


  submitQuotes() {
    this.addQuotes.emit(this.newQuotes);
  }


  constructor() { }

  ngOnInit() {
  }

}
