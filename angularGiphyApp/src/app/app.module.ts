import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FunctionalitiesComponent } from './functionalities/functionalities.component';
import { SearchComponent } from './search/search.component';
import { GiphsContainerComponent } from './giphs-container/giphs-container.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionalitiesComponent,
    SearchComponent,
    GiphsContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
