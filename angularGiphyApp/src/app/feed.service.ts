import { Injectable } from '@angular/core';
import { GiphyAPIService } from './giphy-api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  GIFS_STATIC_OFFSET : number = 25;

  gifs : String[];
  gifsOffset : number;

  constructor(private api :  GiphyAPIService) {
    this.gifs = [];
    this.gifsOffset = 0;
  }

  loadFeed(): Observable<String[]> {
    console.log("yey");
    console.log(this.api.getTrending(this.gifsOffset));
    return this.api.getTrending(this.gifsOffset).map(res => {
      console.log("res");
      console.log(res.data);  
      return res.data.map(gif => {
        console.log(gif.url);
        return gif.images.fixed_height_downsampled.gif_url;
      });
    });
    /*this.gifs.concat(
      this.api.getTrending(this.gifsOffset)
    );*/
    //this.gifsOffset += this.GIFS_STATIC_OFFSET;
    //return this.gifs;
  }

  loadSearch(query : string) {
    this.gifs.concat(
      this.api.getSearched(query, this.gifsOffset)
    );
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    return this.gifs;
  }
}