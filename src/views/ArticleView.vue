<script setup lang="ts">
import { useArticleStore } from '@/stores/article';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const router = useRouter();

const articleStore = useArticleStore();

onMounted(async () => {
  const id = route.params.id as string;

  await articleStore.show(Number(id));
});
</script>

<template>
  <div v-if="articleStore.loading">
    <p>Chargement en cours...</p>
  </div>

  <div
    v-else-if="articleStore.article"
    class="articles"
  >
    <div>
      <button @click="router.go(-1)">Retour</button>

      <h1>{{ articleStore.article.title }}</h1>

      <div v-html="articleStore.article.content"></div>
    </div>

    <div>
      <h3>Categories:</h3>
      <ul>
        <li
          v-for="category in articleStore.article.categories"
          :key="category.id"
        >
          <strong>{{ category.name }}</strong>
        </li>
      </ul>
    </div>
  </div>

  <div v-else>
    <p>Article introuvable.</p>
  </div>
</template>

<style scoped>
.articles {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>
