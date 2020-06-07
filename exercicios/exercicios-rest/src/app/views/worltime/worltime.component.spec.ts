import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorltimeComponent } from './worltime.component';

describe('WorltimeComponent', () => {
  let component: WorltimeComponent;
  let fixture: ComponentFixture<WorltimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorltimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorltimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
