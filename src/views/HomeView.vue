<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
import { useCategoryStore } from '@/stores/category';
import { ref, onMounted } from 'vue';

const articleStore = useArticleStore();

const categoryStore = useCategoryStore();

const searchQuery = ref('');

const selectedCategory = ref('');

onMounted(async () => {
  await articleStore.get();

  await categoryStore.get();
});

function filterArticles() {
  articleStore.filter(selectedCategory.value, searchQuery.value);
}

function resetFilters() {
  searchQuery.value = '';

  selectedCategory.value = '';

  articleStore.get();
}
</script>

<template>
  <div>
    <h1>Articles</h1>

    <div>
      <input
        v-model="searchQuery"
        placeholder="Rechercher..."
      />

      <select v-model="selectedCategory">
        <option value="">Toutes les catégories</option>
        <option
          v-for="category in categoryStore.categories"
          :key="category.id"
          :value="category.name"
        >
          {{ category.name }}
        </option>
      </select>

      <button @click="filterArticles">Rechercher</button>

      <button @click="resetFilters">Réinitialiser</button>
    </div>

    <div v-if="articleStore.loading">Chargement des articles...</div>

    <div v-else>
      <div v-if="articleStore.articles.length">
        <div
          v-for="article in articleStore.articles"
          :key="article.id"
          class="article"
        >
          <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
        </div>
      </div>

      <div v-else>
        <p>Aucun article trouvé.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article {
  margin-bottom: 10px;
}
</style>
