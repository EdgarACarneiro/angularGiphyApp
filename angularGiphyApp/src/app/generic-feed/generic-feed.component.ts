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

  constructor(public favService: FavoritesService, protected api: GiphyAPIService) {
    this.gifsOffset = 0;
    this.icon = "heart";
    this.gifs = [];
  }

  ngOnInit() {
    // Reseting gifs
    this.gifs = [];
    this.gifsOffset = 0;
  }

  updateGifs(newGifs: String[]) {
    this.gifsOffset += this.GIFS_STATIC_OFFSET;
    this.gifs = this.gifs.concat(newGifs);
  }

}
