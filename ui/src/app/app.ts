import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { ThemeService } from './core/services/theme.service';

@Component({
  imports: [RouterOutlet, HomePage, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Taček');
  private theme = inject(ThemeService);
}