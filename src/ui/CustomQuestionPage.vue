<template>
  <div class="interview">
    <div class="interview-header">
      <span class="interview-header__title">
        Заполните небольшой бриф <strong>для предварительной оценки</strong>
        стоимости и сроков разработки сайта
      </span>

      <span class="interview-header__pages">
        {{ currentPage }} / {{ sumPages }}
      </span>

      <div class="interview-header__progress"></div>
    </div>

    <div class="interview-body">
      <slot name="body"/>

      <div class="interview-body__controllers">
        <CustomButton 
          background="fill" 
          color="black-link" 
          text="Предыдущий вопрос" 
          :disabled="currentPage === 1 ? true : false"
          @click="emit('prev')"
        />

        <CustomButton 
          background="fill" 
          :color=" currentPage === 1 ? 'black-link' : 'blue-link'" 
          text="Следующий вопрос"
          @click="emit('next')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import CustomButton from "./CustomButton.vue";

const props = defineProps<{
  sumPages: number;
  currentPage: number;
}>()

const emit = defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>()
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

:root {
  --sum-pages: {{ props.sumPages }};
  --current-page: {{ props.currentPage }};
}

.interview {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.interview-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  position: relative;
  border-bottom: 8px solid #d9d9d9;
}

.interview-header__title {
  width: 60%;
  text-align: left;
  padding-left: 40px;
  padding-bottom: 31px;
  color: $color-grey-bg;
}

.interview-header__pages {
  // width: 100px;
  padding-right: 40px;
  padding-bottom: 31px;
  font-family: var(--font3);
  font-style: italic;
  font-weight: 600;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: -0.04em;
  text-align: right;
  color: #024cff;
}

.interview-header__progress {
  position: absolute;
  bottom: -8px;
  width: calc(100% / v-bind(sumPages) * v-bind(currentPage));
  height: 8px;
  background: #024cff;
} 

.interview-body__controllers {
  width: 100%;
  padding: 0 40px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 769px) {
.interview {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
}

.interview-header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  position: relative;
  border-bottom: 8px solid #d9d9d9;
}

.interview-header__title {
  width: 80%;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 20px;
  color: $color-grey-bg;
}

.interview-header__pages {
  display: none;
}

.interview-header__progress {
  position: absolute;
  bottom: -8px;
  width: calc(100% / v-bind(sumPages) * v-bind(currentPage));
  height: 8px;
  background: #024cff;
} 

.interview-body__controllers {
  width: 100%;
  padding: 0 16px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  justify-content: space-between;
}

.interview-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
}
</style>