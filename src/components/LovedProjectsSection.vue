<template>
  <div class="projects">
    <span class="projects-top">Любимые проекты</span>

    <h2 class="projects-title">
      За время работы решил <br/>
      <strong>более 500</strong> дизайн-задач 
      в различных сферах
    </h2>

    <div class="projects-cards">
      <CasesCard :card="card" v-for="(card, index) of cards" :key="index" class="projects-cards-item"/>
    </div>

    <div class="products-card-wo-images">
      <CasesCardWithoutImages v-for="(card, index) of casesWithoutImages" :key="index" :card="card"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import CasesCard from '../ui/CasesCard.vue';
import CasesCardWithoutImages from '../ui/CasesCardWithoutImages.vue';

type Case = {
  image?: string;
  websiteLink?: string;
  title: string;
  instaLink?: string;
  description?: string;
}

defineProps<{
  cards: Case[],
  casesWithoutImages?: Case[];
}>()
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.projects { 
  width: 100%;
  border-radius: 64px;
  background: $color-white;
  padding: 33px 63px 80px 63px;
  color: $color-black;
}

.projects-top {
  font-size: 24px;
  font-family: var(--font-family);
  color: $color-blue;
  font-weight: 500;
}

.projects-title {
  font-size: 80px;
  line-height: 80px;
  font-family: var(--third-family);
  font-weight: 500;
  margin-bottom: 64px;
  margin-top: 40px;

  strong {
    font-family: var(--font3);
  }
}

.projects-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
}

.projects-cards-item {
  width: calc(50% - 10px);
}

.products-card-wo-images {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 768px) {

  .projects { 
    width: 100%;
    border-radius: 64px;
    background: $color-white;
    padding: 42px 20px 32px 20px;
    color: $color-black;
  }

  .projects-top {
    font-size: 16px;
  }

  .projects-title {
    font-size: 48px;
    line-height: 48px;
    margin-top: 32px;
  }

  .projects-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 40px;
  }

  .projects-cards-item {
    width: 100%;
  }

  .products-card-wo-images {
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
}
</style>