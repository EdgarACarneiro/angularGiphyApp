import { Injectable } from '@angular/core';
import { GiphyAPIService } from './giphy-api.service';
import { Observable, forkJoin, concat } from 'rxjs';
import 'rxjs/add/operator/mergeAll';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  GIFS_STATIC_OFFSET : number = 25;

  gifs$ : Observable<String[]>;
  gifsOffset : number;

  constructor(private api :  GiphyAPIService) {
    this.gifs$ = null;
    this.gifsOffset = 0;
  }

  loadFeed() {
    let newGifs = this.api.getTrending(this.gifsOffset);
    return this.updateGifs(newGifs);
  }

  loadSearch(query : string) {
    let newGifs = this.api.getSearched(query, this.gifsOffset);
    return this.updateGifs(newGifs);
  }

  updateGifs(newGifs : Observable<String[]>) {
    if (this.gifs$ == null)
      this.gifs$ = newGifs;
    else
      //this.gifs = forkJoin(this.gifs, newGifs).mergeAll();
      this.gifs$ = concat(this.gifs$, newGifs);

    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    return this.gifs$;
  }

  resetGifs() {
    this.gifs$ = null;   
    this.gifsOffset = 0;
  }
}