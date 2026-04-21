/**
 * app.config.ts - Configuración del cliente
 * Ubicación: src/app/app.config.ts
 *
 * NUEVO PARA SSR: provideClientHydration()
 *
 * ¿Qué es la hidratación?
 * Cuando Angular hace SSR, el servidor genera HTML estático.
 * El navegador muestra ese HTML inmediatamente (rápido).
 * Luego Angular "hidrata" ese HTML: lo conecta con los
 * event listeners y la lógica de los componentes.
 *
 * Sin hidratación: Angular destruiría el HTML del servidor
 * y lo recrearía desde cero (parpadeo visible).
 *
 * Con hidratación: Angular reutiliza el HTML del servidor
 * y solo le agrega interactividad (transición suave).
 *
 * React equivalente: hydrateRoot() en vez de createRoot()
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),

    /**
     * provideClientHydration() - Habilita la hidratación.
     *
     * withEventReplay(): captura los eventos del usuario
     * (clicks, inputs) que ocurren ANTES de que Angular
     * termine de hidratar, y los reproduce después.
     *
     * Sin esto: si el usuario hace click antes de que
     * Angular hidrate, el click se pierde.
     *
     * Con esto: Angular guarda ese click y lo ejecuta
     * cuando la hidratación termine.
     *
     * React no tiene equivalente directo a withEventReplay.
     */
    provideClientHydration(withEventReplay())
  ]
};