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

  getTrending(offset: number): Observable<String[]> {
    return Observable.from(
      this.giphy.trending("gifs", { "offset": offset })
    ).map((res: any) => res.data
      .map(gif => gif.images.fixed_height_downsampled.gif_url));
  }

  getSearched(query: string, offset: number): Observable<String[]> {
    if (query.trim() === "")
      return;

    return Observable.from(
      this.giphy.search("gifs", { "q": query, "offset": offset })
    ).map((res: any) => res.data
      .map(gif => gif.images.fixed_height_downsampled.gif_url));
  }
}
