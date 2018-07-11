import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query : string;

  constructor(private location: Location, private router : Router) {}

  ngOnInit() {
    this.query = '';
  }

  onSubmit() {
    //this.router.navigate(['/search', this.query]);
    location.replace("/search/" + this.query);
  }

}
