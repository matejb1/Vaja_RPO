import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { ErrorDialogComponent } from './shared/error-dialog-component/error-dialog-component';

@Component({
  imports: [RouterOutlet, HomePage, ErrorDialogComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('eShop');
}
