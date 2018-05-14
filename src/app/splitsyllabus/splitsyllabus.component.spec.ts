import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitsyllabusComponent } from './splitsyllabus.component';

describe('SplitsyllabusComponent', () => {
  let component: SplitsyllabusComponent;
  let fixture: ComponentFixture<SplitsyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitsyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitsyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
