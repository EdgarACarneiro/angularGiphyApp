import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.component.html',
  styleUrls: ['./search-feed.component.css']
})
export class SearchFeedComponent implements OnInit {

  icon: string;
  query: string;
  gifs$: Observable<String[]>;

  constructor(private feedService: FeedService,
    private favService: FavoritesService,
    private route: ActivatedRoute) {
    this.icon = "heart";

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
      this.feedService.resetGifs();
      this.gifs$ = this.feedService.loadSearch(this.query);
    });
  }

  scroll() {
    this.gifs$ = this.feedService.loadSearch(this.query);
  }

}
