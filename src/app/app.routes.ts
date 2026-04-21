/**
 * app.routes.ts - Rutas de la app de noticias
 * Ubicación: src/app/app.routes.ts
 *
 * Estas son las rutas del CLIENTE.
 * En SSR, Angular ejecuta estas mismas rutas en el servidor
 * para generar el HTML antes de enviarlo al navegador.
 */

import { Routes } from '@angular/router';
import { title } from 'process';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
    title: 'Noticias Angular - Inicio'
  },
  {
    path: 'article/:id',
    loadComponent: () => import('./pages/article-detail/article-detail').then(m => m.ArticleDetail),
    title: 'Noticias Angular - Artículo'
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./pages/category/category').then(m => m.Category),
    title: 'Noticias Angular - Categoría'
  },
  {
    path: '**',
    redirectTo: ''
  }
];