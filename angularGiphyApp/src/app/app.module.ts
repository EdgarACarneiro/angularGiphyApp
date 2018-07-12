import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { GiphsContainerComponent } from './giphs-container/giphs-container.component';
import { FeedComponent } from './feed/feed.component';
import { SearchFeedComponent } from './search-feed/search-feed.component';
import { FavFeedComponent } from './fav-feed/fav-feed.component';
import { GenericFeedComponent } from './generic-feed/generic-feed.component';

const appRoutes: Routes = [
  { 
    path: 'search/:query',
    component: SearchFeedComponent,
    data: {title: 'FavGiphy: Search'}
  },
  { 
    path: 'favorites',
    component: FavFeedComponent,
    data: { title: 'FavGiphy: Favorites' }
  },
  {
    path: 'trending',
    component: FeedComponent,
    data: {title: 'FavGiphy: Trending'}
  },
  {
    path: '**',
    redirectTo: '/trending'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GiphsContainerComponent,
    FeedComponent,
    SearchFeedComponent,
    FavFeedComponent,
    GenericFeedComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
