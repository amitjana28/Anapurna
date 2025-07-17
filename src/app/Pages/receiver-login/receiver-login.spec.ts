import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverLogin } from './receiver-login';

describe('ReceiverLogin', () => {
  let component: ReceiverLogin;
  let fixture: ComponentFixture<ReceiverLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
