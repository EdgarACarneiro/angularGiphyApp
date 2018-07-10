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

  plz(offset : number): Observable<any>{
    //let gifs : string[] = [];

    return Observable.from(
      this.giphy.trending("gifs", {"offset" : offset}).map(response => {
        console.log("fds");
      })
    );
    /*.map(res => {
      return res;
    });*/
    /*this.giphy.trending("gifs", { "offset": offset })
    .then((response) => {
      console.log("FDS");
      console.log(response);
      response.data.forEach((gif) => {
          gifs.push(gif.images.fixed_height_downsampled.gif_url);
      });
      return gifs;
    })
    .catch((err) => {
        // Maybe Alert Danger
        return null;
    });*/
  }

  getTrending(offset : number) {
    return this.plz(offset);
  }

  getSearched(query : string, offset : number) {
    let gifs : string[];

    if (query.trim() === "")
      return gifs;

    this.giphy.search("gifs", { "q" : query, "offset": offset })
    .then((response) => {
        response.data.forEach((gif) => {
            gifs.push(gif.images.fixed_height_downsampled.gif_url);
        })
    })
    .catch((err) => {
        // Maybe Alert Danger
    }); 
    return gifs;
  }
}
