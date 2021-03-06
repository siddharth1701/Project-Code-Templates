import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsnewsComponent } from './sportsnews.component';

describe('SportsnewsComponent', () => {
  let component: SportsnewsComponent;
  let fixture: ComponentFixture<SportsnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
