import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { SearchComponent } from './search/search.component';
import { GiphsContainerComponent } from './giphs-container/giphs-container.component';

const appRoutes: Routes = [
  { 
    path: 'search?=:id',
    component: GiphsContainerComponent,
    data: {title: 'FavGiphy: Search'}
  },
  { 
    path: 'favorites',
    component: GiphsContainerComponent,
    data: { title: 'FavGiphy: Favorites' }
  },
  {
    path: 'trending',
    component: GiphsContainerComponent,
    data: {title: 'FavGiphy: Trending'}
  },
  { 
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/trending'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    FunctionalitiesComponent,
    SearchComponent,
    GiphsContainerComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
