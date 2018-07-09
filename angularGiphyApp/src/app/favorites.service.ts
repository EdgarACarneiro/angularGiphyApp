import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  GIFS_STATIC_OFFSET : number = 25;

  favorites : string[];
  favOffset : number;

  constructor() {
    this.favOffset = 0;
  }

  loadFavorites() {
    if (typeof (Storage) !== "undefined") {
      let storageFavorites = localStorage.getItem("favorites");
      if (storageFavorites == null)
          return;

      this,this.favOffset += this.GIFS_STATIC_OFFSET;
      this.favorites = storageFavorites.split(",").slice(0, this.favOffset);
    } else {
        // Sorry! No Web Storage support..
    }
  }

  //TODO: Missing adittion and remotion of gifs here!
}
