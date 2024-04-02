<template>
  <div class="cases">
    <div class="case__image">
      <img :src="card.image" :alt="card.title">
    </div>

    <div class="case-bottom">
      <span class="case-bottom__title">
        {{ card.title }}
      </span>

      <div class="case-bottom-buttons">
        <CustomButton background="fill" color="black-link" text="Кейс" style="width: fit-content;"/>

        <CustomLink background="fill" color="green-link" to="#"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue';
import CustomLink from './CustomLink.vue';
import { defineProps } from 'vue';

defineProps<{
  card: {
    image: string;
    websiteLink: string;
    title: string;
    instaLink: string;
  }
}>()
</script>

<style scoped lang="scss">

.cases {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.case-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.case-bottom__title {
  width: 60%;
  text-align: start;
  padding-left: 16px;
}

.case-bottom-buttons {
  display: flex;
}

@media (max-width: 768px) {
  .cases {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .case__image {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 100%;
    }
  }

  .case-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }

  .case-bottom__title {
    width: 80%;
    text-align: center;
    padding-left: none;
  }

  .case-bottom-buttons {
    display: flex;
    width: 100%;

    * {
      width: 50% !important;
    }
  }
}
</style>