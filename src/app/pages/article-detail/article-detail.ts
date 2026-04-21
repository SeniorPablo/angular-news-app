/**
 * article-detail.ts - Página de detalle de un artículo
 * Ubicación: src/app/pages/article-detail/article-detail.ts
 *
 * SSR + PRERENDER:
 * Esta página usa RenderMode.Prerender en app.routes.server.ts.
 * Angular genera /article/1, /article/2, etc. en build time.
 * El HTML ya existe como archivo estático antes de que
 * cualquier usuario visite la página.
 *
 * IMPORTANTE PARA SEO:
 * Usamos Meta y Title services para establecer meta tags
 * dinámicos. Esto es crucial para SSR porque los crawlers
 * de Google leen estas tags del HTML del servidor.
 *
 * React + Next.js equivalente:
 *   export async function generateMetadata({ params }) {
 *     return { title: article.title, description: article.excerpt };
 *   }
 *
 * Angular: usamos inject(Meta) e inject(Title)
 */

import { Component, inject, input, computed, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-detail',
  imports: [RouterLink],
  templateUrl: './article-detail.html',
  styleUrl: './article-detail.css'
})
export class ArticleDetail implements OnInit {

  private articleService = inject(ArticleService);
  private meta = inject(Meta);
  private titleService = inject(Title);

  /** Parámetro :id de la URL, bindeado como input */
  id = input<string>();

  protected article = computed(() => {
    const id = this.id();
    if (!id) return undefined;
    return this.articleService.getById(Number(id));
  });

  /**
   * OnInit - Lifecycle hook equivalente a useEffect(() => {}, [])
   *
   * Se ejecuta una vez cuando el componente se inicializa.
   * IMPORTANTE: en SSR esto se ejecuta en el SERVIDOR,
   * así que las meta tags se generan en el HTML del servidor.
   * Los crawlers de Google las ven sin necesidad de JavaScript.
   *
   * React + Next.js: generateMetadata() hace lo mismo.
   * React SPA: useEffect + react-helmet (pero los crawlers no lo ven).
   */
  ngOnInit(): void {
    const article = this.article();
    if (article) {
      this.titleService.setTitle(article.title);
      this.meta.updateTag({ name: 'description', content: article.excerpt });
      this.meta.updateTag({ property: 'og:title', content: article.title });
      this.meta.updateTag({ property: 'og:description', content: article.excerpt });
      this.meta.updateTag({ property: 'og:image', content: article.imageUrl });
    }
  }
}