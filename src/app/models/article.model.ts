/**
 * article.model.ts - Interface del modelo Article
 * Ubicación: src/app/models/article.model.ts
 */

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}