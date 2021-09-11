import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralnewsComponent } from './generalnews.component';

describe('GeneralnewsComponent', () => {
  let component: GeneralnewsComponent;
  let fixture: ComponentFixture<GeneralnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
