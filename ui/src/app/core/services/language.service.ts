import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private translate = inject(TranslateService);

  currentLanguage = 'en';

  constructor() {
    const savedLanguage = localStorage.getItem('app-language') || 'en';

    this.setLanguage(savedLanguage);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang).subscribe({
      next: () => {
        this.currentLanguage = lang;
        localStorage.setItem('app-language', lang);
      },
      error: (error) => {
        console.error('Language loading failed:', error);
      }
    });
  }
}