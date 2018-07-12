import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { GiphyAPIService } from '../giphy-api.service';

@Component({
  selector: 'app-generic-feed',
  templateUrl: './generic-feed.component.html'
})
export class GenericFeedComponent implements OnInit {

  icon: string;
  gifs: String[];
  gifsOffset: number;
  GIFS_STATIC_OFFSET: number = 25;

  constructor(protected favService: FavoritesService, protected api: GiphyAPIService) {
    this.gifsOffset = 0;
  }

  ngOnInit() {
    this.resetGifs();
  }

  resetGifs() {
    this.gifs = null;
    this.gifsOffset = 0;
  }

  updateGifs(newGifs: String[]) {
    this.gifsOffset += this.GIFS_STATIC_OFFSET;

    if (this.gifs == null)
      this.gifs = newGifs;
    else
      this.gifs = this.gifs.concat(newGifs);
  }

}
