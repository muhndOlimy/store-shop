import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './store/cart/cart.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { ProductsEffects } from './store/products/products.effects';
import { productDataReducer } from './store/products/products.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule),
    provideStore({
        cart: cartReducer,
        productsData:productDataReducer
    }),
    provideEffects([
      ProductsEffects
    ])
]
};
