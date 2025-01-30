import { fetchData } from '@/utils/fetch';
import type { Article } from '@/utils/models/article';
import { defineStore } from 'pinia';

export const useArticleStore = defineStore('article', {
    state: () => ({
        articles: [] as Article[],
        article: {} as Article,
        loading: false,
    }),
    actions: {
        async get() {
            this.loading = true;
            try {
                const data = await fetchData('/articles');

                this.articles = data.data;
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                this.loading = false;
            }
        },

        async show(id: number) {
            this.loading = true;

            try {
                const data = await fetchData(`/articles/${id}`);

                this.article = data.data;
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                this.loading = false;
            }
        },

        async filter(category: string, title: string) {
            this.loading = true;
            try {
                let url = '/articles?';

                if (category) {
                    url += `category=${category}&`;
                }

                if (title) {
                    url += `title=${title}`;
                }

                const data = await fetchData(url);
                this.articles = data.data;
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                this.loading = false;
            }
        },
    }
});
