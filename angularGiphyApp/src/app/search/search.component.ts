import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query : string;

  constructor(private location: Location) {}

  ngOnInit() {
    this.query = '';
  }

  onSubmit() {
    location.replace("/search/" + this.query);
  }

}
