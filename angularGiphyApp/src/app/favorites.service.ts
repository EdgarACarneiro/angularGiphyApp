import { Injectable } from '@angular/core';
import { SearchFeedComponent } from './search-feed/search-feed.component';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  GIFS_STATIC_OFFSET : number = 25;

  favorites : string[];
  favOffset : number;

  constructor() {
    this.favorites = new Array<string>();
    this.favOffset = 0;
  }

  loadFavorites() {
    if (typeof (Storage) !== "undefined") {
      let storageFavorites = localStorage.getItem("favorites");
      if (storageFavorites == null)
          return;

      this.favOffset += this.GIFS_STATIC_OFFSET;
      this.favorites = storageFavorites.split(",").slice(0, this.favOffset);
    } else {
        // Sorry! No Web Storage support..
    }

    return this.favorites;
  }

  addFav(gif : string) {
    console.log("being called");
    console.log(gif);
    console.log(this);
    let index = this.favorites.indexOf(gif);

    // Meaning gif exists, so pushing it to the top
    if (index !== -1)
      this.favorites.splice(index, 1);
    this.favorites.unshift(gif);

    localStorage.setItem("favorites", this.favorites.toString());
  }

  removeFav(gif : string) {
    console.log("being removed");
    console.log(gif);
    let index = this.favorites.indexOf(gif);

    if (index > -1) {
      this.favorites.splice(index, 1);
      localStorage.setItem("favorites", this.favorites.toString());
    }
  }
}
