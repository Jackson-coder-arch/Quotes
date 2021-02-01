import { Component } from '@angular/core';
// import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  // quotes:Quote [] = [
  //   {id:1, name:'Make your life a masterpiece; imagine no limitations on what you can be, have or do.'},
  //   {id:2, name:'The best way to get started is to Quit Talking and begin Doing'},
  //   {id:3, name:'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.'},
  //   {id:4, name:'Do not let yesterday take up too much of taday.'},
  //   {id:4, name:'You learn more from failure than from success.Do not let it stop you. Failure builds Character.'},

  // ];

  constructor(){
    this.quotes = ['Make your life a masterpiece; imagine no limitations on what you can be, have or do.']
  }
}
