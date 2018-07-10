import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavFeedComponent } from './fav-feed.component';

describe('FavFeedComponent', () => {
  let component: FavFeedComponent;
  let fixture: ComponentFixture<FavFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
