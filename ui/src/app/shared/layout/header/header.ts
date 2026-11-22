import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CdkMenu, CdkMenuGroup, CdkMenuItem, CdkMenuItemRadio, CdkMenuTrigger } from '@angular/cdk/menu';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';
import { KeycloakService } from '../../../core/services/keycloak.service';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CdkMenuTrigger, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuGroup, TranslatePipe],
  templateUrl: './header.html',
})
export class Header {
  private themeService: ThemeService = inject(ThemeService);
  private languageService: LanguageService = inject(LanguageService);
  private keycloakService: KeycloakService = inject(KeycloakService);

  readonly languages: LanguageOption[] = [
    { code: 'sl', label: 'Slovenščina', flag: 'si' },
    { code: 'en', label: 'English', flag: 'gb' },
    { code: 'de', label: 'Deutsch', flag: 'de' },
  ];

  isDark(): boolean {
    return this.themeService.isDark();
  }

  setDark(value: boolean): void {
    this.themeService.setDark(value);
  }

  isCurrentLanguage(code: string): boolean {
    return this.languageService.currentLanguage === code;
  }

  setLanguage(code: string): void {
    this.languageService.setLanguage(code);
  }

  openProfile(): void {
    this.keycloakService.keycloak.accountManagement();
  }

  logout(): void {
    this.keycloakService.logout();
  }
}