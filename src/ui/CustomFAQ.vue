<template>
  <div class="faq">
    <div class="faq-column" v-for="(column, indexC) of colums" :key="indexC">
      <div v-for="(answer, index) of column" :key="answer.id" :id="String(answer.id)" class="faq-item" :class="`${color}-faq`">
        <div class="faq-item-head" @click="openAnswer(answer.id)">
          <span class="faq-item-head__title">{{ answer.title }}</span>

          <div class="faq-item-head__button">
            <img :src="`../../public/faq-button-${color}.svg`" :class="{ active: answers.find((item) => item.id === answer.id)?.status }" alt="">
          </div>
        </div>

        <transition>       
          <span v-show="answer.status" class="faq-item__answer">
            {{ answer.description }}
          </span>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
  answers: {
    title: string;
    description: string;
    status?: boolean;
    id: number;
  }[]
  color: 'blue' | 'white';
  columns: number;
}>()

const colums = ref([props.answers.slice(0, props.columns), props.answers.slice(props.columns + 1, props.answers.length)]);
const answers = ref(props.answers)

function openAnswer(id: number) {
  let answer = answers.value.find((item) => item.id == id);

  if (answer) {
    answer.status = !answer.status
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.faq {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1310px;
  margin: 0 auto;
}

.faq-item {
  width: 100%;
  border: 1px solid $color-white;
  border-radius: 32px;
  height: fit-content;

  &.blue-faq {
    border: 1px solid $color-blue;
  }
}

.faq-column {
  width: 50%;
}

.faq-item-head {
  height: 72px;
  border-radius: 32px;
  display: flex;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover, &:active {
    background: $color-white;
    color: $color-blue;
  }
}

.faq-item-head__title {
  width: 90%;
  color: $color-white;
}

.faq-item-head__button {
  img {
    transition: 0.5s ease;
  }
}

.faq-item__answer {
  display: flex;
  width: 90%;
  margin: 0 auto;
  text-align: start;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #fff;
  margin-top: 29px;
  transition: 0.5s ease-in;
  margin-bottom: 38px;
  text-align: center;
}

.active {
  rotate: 45deg;
  filter: invert(1) saturate(0);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.blue-faq .faq-item-head:active .faq-item-head__title, 
.blue-faq .faq-item-head:hover .faq-item-head__title{
  color: #000;
}

@media  (max-width: 768px) {
  .faq {
    width: 100%;
    flex-direction: column;
    // margin: 0 auto;
  }

  .faq-item {
    width: 100%;
    border: 1px solid $color-white;
    border-radius: 32px;
    height: fit-content;
  }

  .faq-column {
    width: 100%;
  }

  .faq-item-head {
    height: 72px;
    border-radius: 32px;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover, &:active {
      background: $color-white;
      color: $color-blue;
    }
  }

  .faq-item-head__title {
    width: 90%;
  }

  .faq-item-head__button {
    img {
      transition: 0.5s ease;
    }
  }

  .faq-item__answer {
    display: flex;
    width: 90%;
    margin: 0 auto;
    text-align: start;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #fff;
    margin-top: 29px;
    transition: 0.5s ease-in;
    margin-bottom: 38px;
    text-align: center;
  }
}
</style>