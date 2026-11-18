import { inject, Service } from "@angular/core";
import Keycloak from 'keycloak-js';

@Service()
export class KeycloakService { 
    keycloak: Keycloak = inject(Keycloak);
    
    login(): void {
        this.keycloak.login();
    }

    logout(): void {
        this.keycloak.logout({ redirectUri: window.location.origin });
    }

}
