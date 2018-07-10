import { Component, OnInit, Input } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  icon : string;
  gifs : String[];
  @Input() action : Function;

  constructor(private feedService : FeedService) {
    this.icon = "heart";
    this.gifs = this.feedService.gifs;
  }

  ngOnInit() {
    this.feedService.loadFeed();
    console.log("PLOXXX");
    
  }

}
