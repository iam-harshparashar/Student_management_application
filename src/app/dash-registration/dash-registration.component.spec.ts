import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRegistrationComponent } from './dash-registration.component';

describe('DashRegistrationComponent', () => {
  let component: DashRegistrationComponent;
  let fixture: ComponentFixture<DashRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
