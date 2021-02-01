import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote [] = [
    new Quote(1, 'Make your life a masterpiece imagine no limitations on what you can be have or do.', 'Auther:Brian Tracy',new Date(1967,3,14)),
    new Quote(2, 'The best way to get started is to Quit Talking and begin Doing', 'Auther:Walt Disney',new Date(2007,5,7),
    new Quote(3, 'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.', 'Auther: Winston CHurchill',new Date(1957,1,4),
    new Quote(4,'Do not let yesterday take up too much of today.', 'Auther: Will Rogers',new Date(2000,31,4),
    new Quote(5, 'You learn more from failure than from success.Do not let it stop you. Failure builds Character.', 'Auther: Unknow',new Date(1987,4,7),

  ];

  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeGoal(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
