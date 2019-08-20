import { Component, OnInit , Output, EventEmitter, Input} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quotes :Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
    uvotes = 0;
    dvotes = 0;

    upVote(){
      this.uvotes = this.uvotes + 1;
    }

    downVote(){
      this.dvotes = this.dvotes + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
