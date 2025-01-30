import { fetchData } from '@/utils/fetch';
import type { Category } from '@/utils/models/category';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as Category[],
    }),
    actions: {
        async get() {
            try {
                const data = await fetchData('/categories');

                this.categories = data.data;
            } catch (error) {
                console.error('Erreur:', error);
            }
        },
    }
});
