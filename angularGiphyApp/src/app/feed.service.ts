import { Injectable } from '@angular/core';
import { GiphyAPIService } from './giphy-api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  api : GiphyAPIService;
  GIFS_STATIC_OFFSET : number = 25;

  gifs : string[];
  gifsOffset : number;

  constructor(api :  GiphyAPIService) {
    this.api = api;
    this.gifsOffset = 0;
  }

  loadFeed() {
    this.gifs.concat(
      this.api.getTrending(this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
  }

  loadSearch(query : string) {
    this.gifs.concat(
      this.api.getSearched(query, this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
  }
}