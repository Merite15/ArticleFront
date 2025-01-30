import type { Category } from "./category";

export interface Article {
    id: number;
    title: string;
    content: string;
    slug: string;
    categories: Category[];
    media: string | null;
}