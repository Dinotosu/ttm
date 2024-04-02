<template>
  <div class="roadmap">
    <span class="roadmap-top">Этапы работы</span>

    <h2 class="roadmap-title">
      Сначала <strong>понимаю</strong><br/> задачу — затем рисую макеты
    </h2>

    <div class="roadmap__image">
      <img src="../../public/roadmap.png" alt="roadmap">
    </div>

    <div class="roadmap-faq">
      <CustomFAQ :answers="faq" :columns="1" color="white"/>
    </div>

    <h2 class="roadmap-subtitle">
      Давайте обсудим,<br/> <strong>продумаем</strong> и реализуем <br/> ваш проект
    </h2>

    <PhoneForm class="form" @submit="(e) => emit('submit', e)"/>
  </div>
</template>

<script setup lang="ts">
import CustomFAQ from '../ui/CustomFAQ.vue';
import PhoneForm from './PhoneForm.vue';
import { defineEmits } from 'vue';

const emit = defineEmits<{
  (e: 'submit', value: any): void
}>()

const faq = [
  { 
    title: '1. Постановка задачи и целей', 
    description: 'В формате видеозвонка проводим интервью, задаю вопросы по проекту, определяем цели и ваши пожелания.',
    status: false,
    id: 1
  },
  { 
    title: '6.  Дизайн', 
    description: 'На основании выбранной дизайн-концепции разрабатываю дизайн-макеты для всего сайта. Дизайн-макеты презентуются постранично и согласовывается на видео-звонке с обоснованием принятых решений. Возможны итерации правок по макетам.',
    status: false,
    id: 2
  },
]
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.roadmap { 
  width: 100%;
  border-radius: 64px;
  background: $color-blue;
  padding: 33px 63px 80px 63px;
}

.roadmap-top {
  font-size: 24px;
  font-family: var(--font-family);
  color: $color-white;
  font-weight: 500;
}

.roadmap-title {
  font-size: 80px;
  line-height: 80px;
  font-family: var(--third-family);
  font-weight: 500;
  margin-bottom: 32px;
  color: $color-white;
  margin-top: 40px;

  strong {
    font-family: var(--font3);
  }
}

.roadmap__image {
  margin-bottom: 64px;
  display: flex;
  width: 100%;
  
  img {
    width: 100%;
    object-fit: cover;
  }
}

.roadmap-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
}

.roadmap-cards-item {
  width: calc(50% - 10px);
}

.roadmap-card-wo-images {
  // margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.roadmap-subtitle {
  font-size: 64px;
  line-height: 64px;
  font-family: var(--third-family);
  font-weight: 500;
  margin-bottom: 32px;
  color: $color-white;
  margin-top: 110px;

  strong {
    font-family: var(--font3);
  }
}

.form {
  margin: 0 auto;
  margin-top: 83px;
}

@media (max-width: 768px) {
  .roadmap { 
    padding: 42px 20px 32px 20px;
  }

  .roadmap-top {
    font-size: 16px;
  }

  .roadmap-title {
    font-size: 48px;
    line-height: 48px;
    margin-top: 32px;
    width: 110%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .roadmap__image {
    margin-bottom: 24px;
    display: flex;
    width: 100vw;
    position: relative;
    left: -20px;
  }

  .roadmap-faq {
    width: 100%;
    display: flex;
    flex-direction: column;


  }

  .roadmap-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
  }

  .roadmap-cards-item {
    width: 100%;
  }

  .roadmap-card-wo-images {
    // margin-top: 64px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .roadmap-subtitle {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 24px;
    margin-top: 64px;
  }

  .form {
    margin: 0 auto;
  }
}
</style>