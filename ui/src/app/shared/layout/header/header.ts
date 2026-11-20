import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuGroup, CdkMenuTrigger } from '@angular/cdk/menu';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeService } from '../../../core/services/theme.service';
import { LanguageService } from '../../../core/services/language.service';
import { KeycloakService } from '../../../core/services/keycloak.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CdkMenuTrigger, CdkMenu, CdkMenuItem, CdkMenuItemRadio, CdkMenuGroup, TranslatePipe],
  templateUrl: './header.html',
})
export class Header {
  theme = inject(ThemeService);
  lang = inject(LanguageService);
  auth = inject(KeycloakService);

  languages = [
    { code: 'sl', label: 'Slovenščina', flag: '🇸🇮' },
    { code: 'en', label: 'English',     flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch',     flag: '🇩🇪' },
  ];

  openProfile() {
    this.auth.keycloak.accountManagement();
  }
}