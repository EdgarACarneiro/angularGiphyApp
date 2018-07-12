import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import 'rxjs/add/operator/throttle';

@Component({
  selector: 'app-giphs-container',
  templateUrl: './giphs-container.component.html',
  styleUrls: ['./giphs-container.component.css']
})
export class GiphsContainerComponent implements OnInit {

  @Input() icon: string;
  @Input() gifs: String[];
  @Output() loadMore = new EventEmitter();
  @Output() gifAction = new EventEmitter<string>();

  THROTTLE_TIME: number = 600;

  constructor() { }

  ngOnInit() {
    fromEvent(window, 'scroll')
      .throttle(ev => interval(this.THROTTLE_TIME))
      .subscribe((event) => {
        // Check if close to the end of the page
        if ((window.innerHeight + window.scrollY) < (document.body.scrollHeight - 600))
          return;
        this.loadMore.emit();
      });
  }

  onGifClick(gif: string) {
    this.gifAction.emit(gif);
  }

}
