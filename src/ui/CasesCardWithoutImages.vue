<template>
  <div class="cases">
    <span class="case__title">
        {{ card.title }}
    </span>

    <span class="case__description">
        {{ card.description }}
    </span>


    <div class="case-bottom">
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
    image?: string;
    websiteLink?: string;
    title: string;
    instaLink?: string;
    description?: string;
  }
}>()
</script>

<style scoped lang="scss">

.cases {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 12px;
  background: #E6E9ED;
  border-radius: 64px;
  height: 116px;
  justify-content: baseline;
  align-items: center;
  padding: 0 25px 0 45px;
}

.case__title {
  font-size: 24px;
  font-weight: 500;
  width: 290px;
  text-align: start;
}

.case-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
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
    width: 100%;
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
    flex-wrap: wrap;
    gap: 0px;
    margin-top: 40px;
  }

  .case__title {
    font-size: 32px;
    width: 100%;
    text-align: center;
  }

  .case__description {
    width: 50%;
    font-size: 16px;
    margin-top: 14px;
    margin-bottom: 24px;
  }

  .case-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 0;
    width: 100%;
  }

  .case-bottom__title {
    width: 60%;
    text-align: start;
    padding-left: 16px;
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