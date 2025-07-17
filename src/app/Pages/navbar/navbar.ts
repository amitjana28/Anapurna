import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  appName = signal("ANAPURNA - Food Donation");
  contactUs = "Contact Us";
  aboutUs = "About Us";
}
