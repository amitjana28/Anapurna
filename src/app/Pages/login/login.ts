import { Component } from '@angular/core';
import { DonerLogin } from '../doner-login/doner-login';
import { ReceiverLogin } from '../receiver-login/receiver-login';

@Component({
  selector: 'app-login',
  imports: [DonerLogin,ReceiverLogin],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
