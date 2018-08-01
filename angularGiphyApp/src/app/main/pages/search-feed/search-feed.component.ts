import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GenericFeedComponent } from '../../components/generic-feed/generic-feed.component';
import { FavoritesService } from '../../services/favorites/favorites.service';
import { GiphyAPIService } from '../../services/giphy-api/giphy-api.service';

@Component({
  selector: 'app-search-feed',
  templateUrl: './search-feed.component.html'
})
export class SearchFeedComponent extends GenericFeedComponent {

  query: string;

  constructor(favService: FavoritesService, api: GiphyAPIService, private route: ActivatedRoute) {
    super(favService, api);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      super.ngOnInit();
      this.query = params.get('query');
      this.loadMoreSearch();
    });
  }

  loadMoreSearch() {
    this.api.getSearched(this.query, this.gifsOffset)
      .subscribe(newGifs => this.updateGifs(newGifs));
  }

}
