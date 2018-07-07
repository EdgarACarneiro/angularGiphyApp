import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphs-container',
  templateUrl: './giphs-container.component.html',
  styleUrls: ['./giphs-container.component.css']
})
export class GiphsContainerComponent implements OnInit {

  icon : string;
  gifs : string[];
  // Name of binded function to be triggered (?) ou entao cenas com serviçoes, tenho de ver como fazer isto em angular
  actionFnc : string;

  constructor() { }

  ngOnInit() {
  }

  onGifClick() {
    // TODO sth with the action that it will receive
  }

}
