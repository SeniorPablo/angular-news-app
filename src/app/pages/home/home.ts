/**
 * home.ts - Página principal del sitio de noticias
 * Ubicación: src/app/pages/home/home.ts
 *
 * IMPORTANTE PARA SSR:
 * Este componente se ejecuta PRIMERO en el servidor.
 * Angular llama a inject(), ejecuta la lógica, genera el HTML
 * y lo envía al navegador. Luego se ejecuta de nuevo en el
 * cliente para hidratar.
 *
 * Regla: evita usar APIs del navegador (window, document,
 * localStorage) directamente. En el servidor no existen.
 */

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private articleService = inject(ArticleService);

  protected articles = this.articleService.getAll();
  protected categories = this.articleService.getCategories();

  /**
   * El artículo destacado es el primero de la lista.
   * El resto van en el grid secundario.
   */
  protected featured = this.articles[0];
  protected rest = this.articles.slice(1);
}