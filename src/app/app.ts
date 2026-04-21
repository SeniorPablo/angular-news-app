/**
 * app.ts - Componente raíz del sitio de noticias
 * Ubicación: src/app/app.ts
 *
 * SSR: Este componente se renderiza tanto en el servidor
 * como en el cliente. La navbar y el router-outlet
 * se generan en el servidor con el contenido de la ruta actual.
 */

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }