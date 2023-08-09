import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashComponent } from './login-dash.component';

describe('LoginDashComponent', () => {
  let component: LoginDashComponent;
  let fixture: ComponentFixture<LoginDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
