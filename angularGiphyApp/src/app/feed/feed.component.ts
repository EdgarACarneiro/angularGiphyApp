import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { GenericFeedComponent } from '../generic-feed/generic-feed.component';
import { GiphyAPIService } from '../giphy-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent extends GenericFeedComponent {

  constructor(favService: FavoritesService, api: GiphyAPIService) {
    super(favService, api);
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
