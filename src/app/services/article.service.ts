/**
 * article.service.ts - Servicio de artículos de noticias
 * Ubicación: src/app/services/article.service.ts
 *
 * IMPORTANTE PARA SSR:
 * Este servicio funciona tanto en el servidor como en el cliente.
 * Angular ejecuta el mismo código en ambos entornos.
 * En una app real usarías HttpClient para llamar una API,
 * y Angular se encarga de ejecutar esas llamadas en el servidor
 * durante el SSR y luego transferir los datos al cliente
 * para no hacer la llamada dos veces (TransferState).
 */

import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  private readonly articles: Article[] = [
    {
      id: 1,
      title: 'Angular 21 Revoluciona el Desarrollo Web',
      excerpt: 'La nueva versión de Angular trae Signals por defecto y elimina Zone.js.',
      content: `Angular 21 marca un antes y después en el framework. Los Signals 
        son ahora la forma predeterminada de manejar reactividad, reemplazando 
        completamente a Zone.js. Esto resulta en aplicaciones más rápidas y 
        bundles más pequeños. Los standalone components son el estándar y ya no 
        es necesario declarar standalone: true explícitamente. El nuevo sistema 
        de hidratación incremental permite que las apps SSR sean interactivas 
        más rápido al hidratar solo los componentes visibles.`,
      author: 'Ana García',
      date: '2025-06-15',
      category: 'Tecnología',
      imageUrl: 'https://picsum.photos/seed/news1/800/400'
    },
    {
      id: 2,
      title: 'TypeScript 6.0 Lanzado con Tipos Más Inteligentes',
      excerpt: 'El nuevo sistema de inferencia reduce el código boilerplate en un 40%.',
      content: `Microsoft ha lanzado TypeScript 6.0 con mejoras significativas en 
        la inferencia de tipos. El nuevo motor de tipos puede deducir genéricos 
        complejos sin anotaciones explícitas. Las template literal types ahora 
        soportan regex patterns, y el nuevo modo strict++ agrega verificaciones 
        adicionales para null safety. La comunidad reporta una reducción del 40% 
        en anotaciones de tipo necesarias.`,
      author: 'Carlos López',
      date: '2025-06-10',
      category: 'Tecnología',
      imageUrl: 'https://picsum.photos/seed/news2/800/400'
    },
    {
      id: 3,
      title: 'El Futuro del Trabajo Remoto en Latinoamérica',
      excerpt: 'Empresas tech adoptan modelos híbridos con equipos distribuidos.',
      content: `Un estudio reciente revela que el 78% de las empresas tecnológicas 
        en Latinoamérica han adoptado modelos de trabajo híbrido permanentes. 
        Colombia y México lideran la tendencia, con hubs tecnológicos emergentes 
        en Medellín, Guadalajara y Buenos Aires. Las empresas reportan un aumento 
        del 25% en productividad y una reducción del 30% en costos operativos. 
        Sin embargo, el desafío principal sigue siendo mantener la cultura 
        organizacional y la colaboración efectiva.`,
      author: 'María Torres',
      date: '2025-06-08',
      category: 'Negocios',
      imageUrl: 'https://picsum.photos/seed/news3/800/400'
    },
    {
      id: 4,
      title: 'Inteligencia Artificial Generativa en el Desarrollo',
      excerpt: 'Cómo los LLMs están cambiando la forma en que escribimos código.',
      content: `La integración de IA generativa en los IDEs ha transformado el 
        flujo de trabajo de los desarrolladores. Herramientas como Copilot y 
        Claude Code permiten generar componentes completos a partir de 
        descripciones en lenguaje natural. Los estudios muestran que los 
        desarrolladores son un 55% más productivos en tareas rutinarias, 
        aunque la revisión de código y el diseño de arquitectura siguen 
        requiriendo expertise humano.`,
      author: 'Pedro Ramírez',
      date: '2025-06-05',
      category: 'Tecnología',
      imageUrl: 'https://picsum.photos/seed/news4/800/400'
    },
    {
      id: 5,
      title: 'Nuevas Tendencias en Diseño UI/UX 2025',
      excerpt: 'Glassmorphism evoluciona y el diseño 3D se vuelve mainstream.',
      content: `Las tendencias de diseño para 2025 muestran una evolución hacia 
        interfaces más inmersivas. El glassmorphism ha evolucionado con nuevos 
        efectos de profundidad usando CSS backdrop-filter. El diseño 3D 
        interactivo se ha vuelto accesible gracias a WebGPU y Three.js. 
        La tipografía variable domina con fuentes que se adaptan al contexto 
        y los micro-interactions se han convertido en estándar.`,
      author: 'Laura Martínez',
      date: '2025-06-01',
      category: 'Diseño',
      imageUrl: 'https://picsum.photos/seed/news5/800/400'
    },
    {
      id: 6,
      title: 'Ciberseguridad: Los Retos del 2025',
      excerpt: 'Los ataques con IA obligan a replantear las estrategias de defensa.',
      content: `El panorama de ciberseguridad en 2025 presenta nuevos desafíos. 
        Los ataques potenciados por IA son más sofisticados y difíciles de 
        detectar. El ransomware como servicio sigue creciendo y los ataques 
        a la cadena de suministro se han duplicado. Las organizaciones 
        están adoptando arquitecturas Zero Trust y autenticación sin 
        contraseñas como respuesta a estas amenazas.`,
      author: 'Diego Hernández',
      date: '2025-05-28',
      category: 'Seguridad',
      imageUrl: 'https://picsum.photos/seed/news6/800/400'
    }
  ];

  getAll(): Article[] {
    return this.articles;
  }

  getById(id: number): Article | undefined {
    return this.articles.find(a => a.id === id);
  }

  getByCategory(category: string): Article[] {
    return this.articles.filter(a => a.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.articles.map(a => a.category))];
  }
}