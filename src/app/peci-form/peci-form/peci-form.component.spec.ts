import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeciFormComponent } from './peci-form.component';

describe('PeciFormComponent', () => {
  let component: PeciFormComponent;
  let fixture: ComponentFixture<PeciFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeciFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
