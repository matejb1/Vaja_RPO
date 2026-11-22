import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ErrorDialogComponent } from './shared/error-dialog-component/error-dialog-component';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { ThemeService } from './core/services/theme.service';

@Component({
  imports: [RouterOutlet, HomePage, ErrorDialogComponent, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Taček');
  private themeService: ThemeService = inject(ThemeService);
}