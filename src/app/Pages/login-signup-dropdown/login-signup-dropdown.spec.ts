import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupDropdown } from './login-signup-dropdown';

describe('LoginSignupDropdown', () => {
  let component: LoginSignupDropdown;
  let fixture: ComponentFixture<LoginSignupDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignupDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
