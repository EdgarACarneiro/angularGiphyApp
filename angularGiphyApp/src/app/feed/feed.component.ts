import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { GenericFeedComponent } from '../generic-feed/generic-feed.component';
import { GiphyAPIService } from '../giphy-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent extends GenericFeedComponent {

  icon: string;

  constructor(favService: FavoritesService, api: GiphyAPIService) {
    super(favService, api);
    this.icon = "heart";
  }

  ngOnInit() {
    super.ngOnInit();
    this.loadMoreFeed();
  }

  loadMoreFeed() {
    this.api.getTrending(this.gifsOffset)
      .subscribe(newGifs => this.updateGifs(newGifs));
  }

}
