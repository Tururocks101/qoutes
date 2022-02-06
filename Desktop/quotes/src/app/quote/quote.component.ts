import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Tew", "Anonymous", "In the end we are nothing but memories"),
    new Quote("Li", "Erick", "Live live to the fullest.")
  ]
    

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  likes(i) {
    this.quotes[i].likes ++;
  }
  dislikes(i) {
    this.quotes[i].dislikes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestlikes(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}