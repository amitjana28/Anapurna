import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-signup-dropdown',
  imports: [RouterLink, CommonModule],
  templateUrl: './login-signup-dropdown.html',
  styleUrl: './login-signup-dropdown.css'
})
export class LoginSignupDropdown {  
  isLogin : boolean = true
  isSignup : boolean = false
  isHomePage : boolean = true

  switchOption(){
    this.isSignup = !this.isSignup;
    this.isLogin = !this.isLogin;
    this.isHomePage = false;
  }

  getTitle() {
    console.log(document.title)
    return document.title;
  }
}

