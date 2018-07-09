import { Injectable } from '@angular/core';
import { GiphyAPIService } from './giphy-api.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  GIFS_STATIC_OFFSET : number = 25;

  gifs : string[];
  gifsOffset : number;

  constructor(private api :  GiphyAPIService) {
    this.gifs = [];
    this.gifsOffset = 0;
  }

  loadFeed() {
    this.gifs.concat(
      this.api.getTrending(this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    return this.gifs;
  }

  loadSearch(query : string) {
    this.gifs.concat(
      this.api.getSearched(query, this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    return this.gifs;
  }
}