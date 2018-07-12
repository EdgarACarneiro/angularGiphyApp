import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericFeedComponent } from './generic-feed.component';

describe('GenericFeedComponent', () => {
  let component: GenericFeedComponent;
  let fixture: ComponentFixture<GenericFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
