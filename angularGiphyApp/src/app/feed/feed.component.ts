import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  icon : string;
  gifs : Observable<String[]>;
  @Input() action : Function;

  constructor(private feedService : FeedService) {
    this.icon = "heart";
    this.gifs = new Observable;
    //this.gifs = this.feedService.gifs;
  }

  ngOnInit() {
    this.gifs = this.feedService.loadFeed();
    console.log("PLOXXX"); 
  }

}
