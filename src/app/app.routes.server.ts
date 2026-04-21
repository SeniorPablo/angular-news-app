/**
 * app.routes.server.ts - Configuración de renderizado por ruta
 * Ubicación: src/app/app.routes.server.ts
 *
 * Este archivo NO EXISTE en React. Es exclusivo de Angular SSR.
 * Aquí defines CÓMO se renderiza cada ruta.
 *
 * RENDER MODES EXPLICADOS:
 *
 * 1. RenderMode.Prerender (SSG - Static Site Generation)
 *    - HTML se genera en BUILD TIME (ng build)
 *    - Ideal para contenido que no cambia frecuentemente
 *    - Más rápido porque sirve HTML estático
 *    - Next.js equivalente: getStaticProps / generateStaticParams
 *
 * 2. RenderMode.Server (SSR - Server Side Rendering)
 *    - HTML se genera en CADA REQUEST
 *    - Ideal para contenido dinámico o personalizado
 *    - Next.js equivalente: getServerSideProps / "use server"
 *
 * 3. RenderMode.Client (CSR - Client Side Rendering)
 *    - HTML se genera en el NAVEGADOR (SPA tradicional)
 *    - Ideal para páginas interactivas que no necesitan SEO
 *    - Next.js equivalente: "use client"
 */

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  /**
   * Home: SSR en cada request.
   * En un sitio de noticias, la portada cambia frecuentemente
   * así que generamos el HTML en cada petición.
   */
  {
    path: '',
    renderMode: RenderMode.Server
  },

  /**
   * Detalle de artículo: Prerender (SSG).
   * Los artículos no cambian después de publicarse,
   * así que generamos el HTML una vez en build time.
   *
   * getPrerenderParams: le dice a Angular qué valores de :id
   * pre-renderizar. Es como generateStaticParams en Next.js.
   * Angular generará /article/1, /article/2, etc. en build time.
   */
  {
    path: 'article/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' },
        { id: '5' },
        { id: '6' }
      ];
    }
  },

  /**
   * Categoría: Prerender.
   * Las categorías son conocidas de antemano,
   * así que las pre-renderizamos.
   */
  {
    path: 'category/:name',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { name: 'Tecnología' },
        { name: 'Negocios' },
        { name: 'Diseño' },
        { name: 'Seguridad' }
      ];
    }
  },

  /**
   * Cualquier otra ruta: renderizar en el servidor.
   */
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];