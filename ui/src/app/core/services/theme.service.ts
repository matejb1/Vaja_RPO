import { Service, effect, signal } from '@angular/core';

const STORAGE_KEY = 'app-theme-dark';

@Service()
export class ThemeService {
  private readonly darkMode = signal<boolean>(this.initial());

  constructor() {
    effect(() => {
      document.documentElement.dataset['theme'] = this.darkMode() ? 'dark' : 'light';
      localStorage.setItem(STORAGE_KEY, String(this.darkMode()));
    });
  }

  isDark(): boolean {
    return this.darkMode();
  }

  setDark(value: boolean): void {
    this.darkMode.set(value);
  }

  toggle(): void {
    this.darkMode.update(dark => !dark);
  }

  private initial(): boolean {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}