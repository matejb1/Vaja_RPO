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

  private readonly demoResourceService: DemoResourceService = inject(DemoResourceService);
  private readonly languageService: LanguageService = inject(LanguageService);
  private readonly keycloakService: KeycloakService = inject(KeycloakService);

  item: WritableSignal<DemoDTO | null> = signal<DemoDTO | null>(null);

  ngOnInit(): void {
    this.demoResourceService.getDemoDTO().subscribe(data => this.item.set(data));
    // this.demoResourceService.getDemoFromExtDBDTO(1).subscribe(data => this.item.set(data));
  }

  changeLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  logout(): void {
    this.keycloakService.logout();
  }

}
