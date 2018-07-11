import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-fav-feed',
  templateUrl: './fav-feed.component.html',
  styleUrls: ['./fav-feed.component.css']
})
export class FavFeedComponent implements OnInit {

  icon : string;
  gifs : String[];

  constructor(private favService : FavoritesService) {
    this.icon = "times";
    this.gifs = new Array<String>();
  }

  ngOnInit() {
    this.gifs = this.favService.loadFavorites();
  }

  scroll() {
    this.gifs = this.favService.loadFavorites();
  }

}
