import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query : string;

  constructor() { }

  ngOnInit() {
    this.query = '';
  }

  onSubmit() {
    // TODO: use value of query to ask for gifs
  }

}
