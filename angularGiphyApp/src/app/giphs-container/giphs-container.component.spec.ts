import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphsContainerComponent } from './giphs-container.component';

describe('GiphsContainerComponent', () => {
  let component: GiphsContainerComponent;
  let fixture: ComponentFixture<GiphsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
