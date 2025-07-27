import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username:string = ""
  password:string = ""

  loginPageTitle: string = 'Login';

  validateUser(){
    if(this.username ==='admin' && this.password === 'admin'){
      alert("Successfull login !")
    } else {
      alert("Invalid Details!")
    }
  }
}
