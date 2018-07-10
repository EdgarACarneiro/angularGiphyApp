import { Injectable } from '@angular/core';
import { GiphyAPIService } from './giphy-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  GIFS_STATIC_OFFSET : number = 25;

  gifs : Observable<String[]>;
  gifsOffset : number;

  constructor(private api :  GiphyAPIService) {
    this.gifs = new Observable;
    this.gifsOffset = 0;
  }

  loadFeed() {
    console.log("yey");
    console.log(this.api.getTrending(this.gifsOffset));
    return this.api.getTrending(this.gifsOffset);
    /*this.gifs.concat(
      this.api.getTrending(this.gifsOffset)
    );*/
    //this.gifsOffset += this.GIFS_STATIC_OFFSET;
    //return this.gifs;
  }

  loadSearch(query : string) {
    return this.api.getSearched(query, this.gifsOffset)
    /*this.gifs.concat(
      this.api.getSearched(query, this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    return this.gifs;*/
  }
}