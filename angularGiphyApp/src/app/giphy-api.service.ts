import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable({
  providedIn: 'root'
})
export class GiphyAPIService {

  API_KEY: string = "8XADJBZWvzB75qIDyCpfWLbnE5otD7wG";

  constructor(private http: HttpClient) { }

  getTrending(offset: number): Observable<String[]> {
    return Observable.from(
      this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.API_KEY}`)
    ).map((res: any) => res.data
      .map(gif => gif.images.fixed_height_downsampled.url));
  }

  getSearched(query: string, offset: number): Observable<String[]> {
    if (query.trim() === "")
      return;

    return Observable.from(
      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${query}`)
    ).map((res: any) => res.data
      .map(gif => gif.images.fixed_height_downsampled.url));
  }
}
