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
    this.favorites = [];
    this.favOffset = 0;

    this.addFav.bind(this.addFav);
    this.removeFav.bind(this.removeFav);
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
  }

  removeFav(gif : string) {
    console.log("being removed");
    console.log(gif);
  }
  /*addFavorite(event, gif) {
    let index = this.state.favorites.indexOf(gif);
    let newArray = this.state.favorites.slice();

    // Meaning gif exists, so pushing it to the top
    if (index !== -1)
        newArray.splice(index, 1);
    newArray.unshift(gif);

    this.setState({
        favorites: newArray
    });
    localStorage.setItem("favorites", newArray);
  }

  removeFavorite(event, gif) {
    let index = this.state.favorites.indexOf(gif);

    if (index > -1) {
        let newArray = this.state.favorites.slice();
        newArray.splice(index, 1);

        this.setState({
            favorites: newArray
        });
        localStorage.setItem("favorites", newArray);
    }
  }*/
}
