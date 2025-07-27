import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginSignupDropdown } from '../login-signup-dropdown/login-signup-dropdown';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,LoginSignupDropdown],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  appName = signal("ANAPURNA - Food Donation");
  contactUs = "Contact Us";
  aboutUs = "About Us";
}
