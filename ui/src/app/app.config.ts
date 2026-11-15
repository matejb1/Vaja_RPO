import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { Directionality } from '@angular/cdk/bidi';
import { provideRouter } from '@angular/router';
import { createInterceptorCondition, INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG, IncludeBearerTokenCondition, includeBearerTokenInterceptor, provideKeycloak } from 'keycloak-angular';

import { routes } from './app.routes';
import { LiveDirectionality } from './core/services/live-directionality.service';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideDefaultClient } from './api/providers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: Directionality, useClass: LiveDirectionality },
    
    provideDefaultClient({
      basePath: "http://localhost:8081",
    }),

    provideHttpClient( withInterceptors([includeBearerTokenInterceptor]) ),
    {
      provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
      useValue: [
        createInterceptorCondition<IncludeBearerTokenCondition>({
          urlPattern: /^http:\/\/localhost:8081\/.*/
        })
      ]
    },


    provideKeycloak({
      config: {
        url: 'http://localhost:8080',
        realm: 'eshop',
        clientId: 'frontend'
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        pkceMethod: 'S256'
      }
    }),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: './i18n/',
        suffix: '.json'
      }),
      lang: 'en',
      fallbackLang: 'en'
    })

  ],
};
