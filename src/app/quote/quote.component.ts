import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote [] = [
    {id:1, name:'Make your life a masterpiece; imagine no limitations on what you can be, have or do.'},
    {id:2, name:'The best way to get started is to Quit Talking and begin Doing'},
    {id:3, name:'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.'},
    {id:4, name:'Do not let yesterday take up too much of taday.'},
    {id:4, name:'You learn more from failure than from success.Do not let it stop you. Failure builds Character.'},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
