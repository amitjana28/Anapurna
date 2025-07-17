import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonerLogin } from './doner-login';

describe('DonerLogin', () => {
  let component: DonerLogin;
  let fixture: ComponentFixture<DonerLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonerLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonerLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
