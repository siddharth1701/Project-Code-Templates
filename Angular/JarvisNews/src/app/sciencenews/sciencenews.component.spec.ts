import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SciencenewsComponent } from './sciencenews.component';

describe('SciencenewsComponent', () => {
  let component: SciencenewsComponent;
  let fixture: ComponentFixture<SciencenewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SciencenewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SciencenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
