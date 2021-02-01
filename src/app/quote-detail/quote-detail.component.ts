import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
// import { Button } from 'protractor';

import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote | undefined;
  @Output() isComplete = new EventEmitter<boolean>();


quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
