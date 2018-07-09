import { Injectable } from '@angular/core';
var GphApiClient = require('giphy-js-sdk-core');

@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {

  giphy: any;

  constructor() {
    this.giphy = GphApiClient("8XADJBZWvzB75qIDyCpfWLbnE5otD7wG");
  }

  getTrending(offset : number) {
    let gifs : string[];

    this.giphy.trending("gifs", { "offset": offset })
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
  }
}
