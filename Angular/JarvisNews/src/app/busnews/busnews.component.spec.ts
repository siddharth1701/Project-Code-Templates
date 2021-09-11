import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusnewsComponent } from './busnews.component';

describe('BusnewsComponent', () => {
  let component: BusnewsComponent;
  let fixture: ComponentFixture<BusnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
