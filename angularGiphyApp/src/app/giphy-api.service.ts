import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

var GphApiClient = require('giphy-js-sdk-core');

@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {

  giphy: any;

  constructor() {
    this.giphy = GphApiClient("8XADJBZWvzB75qIDyCpfWLbnE5otD7wG");
  }

  getTrendingObs(offset : number): Observable<any> {
    return Observable.from(
      this.giphy.trending("gifs", {"offset" : offset}) 
    );
  }

  getTrending(offset : number): Observable<String[]> {
    return this.getTrendingObs(offset).map(res => {
      return res.data.map(gif => {
        return gif.images.fixed_height_downsampled.gif_url;
      });
    });
  }

  getSearchedObs(query : string, offset : number): Observable<any> {
    return Observable.from(
      this.giphy.search("gifs", { "q" : query, "offset": offset })
    );
  }

  getSearched(query : string, offset : number): Observable<String> {
    if (query.trim() === "")
      return;

    return this.getSearchedObs(query, offset).map(res => {
      return res.data.map(gif => {
        return gif.images.fixed_height_downsampled.gif_url;
      });
    });
  }
}
