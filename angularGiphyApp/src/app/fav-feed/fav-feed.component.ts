import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-feed',
  templateUrl: './fav-feed.component.html'
})
export class FavFeedComponent implements OnInit {

  icon: string;
  gifs: String[];

  constructor(public favService: FavoritesService) {
    this.icon = "times";
  }

  ngOnInit() {
    this.gifs = this.favService.loadFavorites();
  }

  loadMoreFav() {
    this.gifs = this.favService.loadFavorites();
  }

}
