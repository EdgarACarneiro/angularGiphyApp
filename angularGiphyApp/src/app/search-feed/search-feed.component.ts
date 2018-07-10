import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.component.html',
  styleUrls: ['./search-feed.component.css']
})
export class SearchFeedComponent implements OnInit {

  icon : string;
  query : string;
  gifs : Observable<String[]>;
  @Input() action : Function;

  constructor(private feedService : FeedService, private route: ActivatedRoute) {
    this.query = this.route.snapshot.paramMap.get('query');
    this.icon = "heart";
    this.gifs = new Observable;
  }

  ngOnInit() {
    this.feedService.resetGifs;
    this.gifs = this.feedService.loadSearch(this.query);
  }

  scroll() {
    this.gifs = this.feedService.loadSearch(this.query);
  }

}
