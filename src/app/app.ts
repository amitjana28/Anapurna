import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Pages/navbar/navbar';
import { HomeContent } from './Pages/home-content/home-content';
import { Footer } from './Pages/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HomeContent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Anapurna');
}
