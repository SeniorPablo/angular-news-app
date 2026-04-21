/**
 * category.ts - Página que filtra artículos por categoría
 * Ubicación: src/app/pages/category/category.ts
 *
 * Esta página también usa Prerender (SSG).
 * Angular genera /category/Tecnología, /category/Negocios, etc.
 * en build time gracias a getPrerenderParams en app.routes.server.ts.
 */

import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
  private articleService = inject(ArticleService);

  /** Parámetro :name de la URL */
  name = input<string>();

  protected articles = computed(() => {
    const name = this.name();
    if (!name) return [];
    return this.articleService.getByCategory(name);
  });
}