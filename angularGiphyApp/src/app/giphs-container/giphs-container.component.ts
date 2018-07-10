import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-giphs-container',
  templateUrl: './giphs-container.component.html',
  styleUrls: ['./giphs-container.component.css']
})
export class GiphsContainerComponent implements OnInit {

  @Input() icon : string;
  @Input() gifs : String[];
  // Name of binded function to be triggered (?) ou entao cenas com serviços, tenho de ver como fazer isto em angular
  @Input() actionFnc : Function;

  constructor() { }

  ngOnInit() {
  }

  onGifClick(gif : string) {
    this.actionFnc(gif);
  }

}
