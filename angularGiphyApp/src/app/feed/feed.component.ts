import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Observable } from 'rxjs';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  icon : string;
  gifs : Observable<String[]>;
  action : Function;

  constructor(private feedService : FeedService, private favService : FavoritesService,) {
    this.icon = "heart";
    this.gifs = new Observable;
    this.action = favService.addFav;
  }

  ngOnInit() {
    this.feedService.resetGifs;
    this.gifs = this.feedService.loadFeed();
  }

  scroll() {
    this.gifs = this.feedService.loadFeed();
  }

}
