import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { DemoDTO, DemoResourceService } from '../../api';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../core/services/language.service';
import { KeycloakService } from '../../core/services/keycloak.service';

@Component({
  imports: [TranslatePipe],
  selector: 'app-home-page',
  styleUrl: './home-page.css',
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {

  private demoResourceService: DemoResourceService = inject(DemoResourceService);
  private languageService: LanguageService = inject(LanguageService);
  private keycloakService: KeycloakService = inject(KeycloakService);

  item: WritableSignal<DemoDTO | null> = signal<DemoDTO | null>(null);

  ngOnInit(): void {
    this.demoResourceService.getDemoDTO().subscribe(data => this.item.set(data));
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  logout() {
    this.keycloakService.logout();
  }

}
