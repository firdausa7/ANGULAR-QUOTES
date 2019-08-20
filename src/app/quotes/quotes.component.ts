import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  myquotes: Quotes[] = [
  new Quotes(1, 'I drink and I know things', 'Tyrion Lanister', '', new Date(2019,6,17)),
  new Quotes(2, 'When you play the game of thrones, you win, or you die.', 'Cersei Lanister', '', new Date(2019,6,17)),
  new Quotes(3, 'You know nothing Jon Snow', 'Ygritte','', new Date(2019,6,17)),
  new Quotes(4, 'Winter is coming', 'Everyone','', new Date(2019,6,18)),
  new Quotes(5,'The things I do for love.','Jamie Lanister', '', new Date(2019,7,18)),
  new Quotes(6,'Hold the door … Hodor.','Hodor', '', new Date(2019,7,18)),
];

addNewQuotes(Quotes){
    let myquotesLength = this.myquotes.length;
    Quotes.id = myquotesLength+1;
    Quotes.completeDate = new Date(Quotes.completeDate)
    this.myquotes.push(Quotes)
    alert(`Hi ${Quotes.publisher}, Your Quote has been Published. Thank You!`);
  }

  toggleDetails(index){
    this.myquotes[index].showDescription = !this.myquotes[index].showDescription;
  }

  deleteQuotes(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.myquotes[index].name}?`)
      if (toDelete){
        this.myquotes.splice(index,1)
      }
    }
  }
  voteIncrement(index){
    this.myquotes[index].upvote = this.myquotes[index].upvote += 1;
  }
voteDecrement(index){
  this.myquotes[index].downvote = this.myquotes[index].downvote += 1;
}

  constructor() { }
  ngOnInit() {
  }
}




