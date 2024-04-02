<template>
  <!-- <CustomPopup :state="true"> -->
    <div class="thanks">
      <h3 class="thanks__title">
        Спасибо :)
      </h3>

      <p class="thanks__subtitle">
        В ближайшее время оценю задачу и напишу Вам с предложением!
      </p>

      <CustomButton 
        class="thanks__button" 
        background="fill" 
        color="white" 
        text="На главную"
        @click="emit('redirect')"
      />

      <div class="thanks__image">
        <img src="../../public/phones.png" alt="" >
      </div>
    </div>
</template>

<script setup lang="ts">
import CustomPopup from "../ui/CustomPopup.vue";
import CustomButton from "../ui/CustomButton.vue";
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: 'redirect'): void
}>()
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.thanks {
  width: 966px;
  height: 442px;
  background: $color-blue;
  border-radius: 32px;
  padding: 34px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  .thanks__title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: -0.04em;
    color: #fff;
  }

  .thanks__subtitle {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    color: #fff;
    text-align: left;
    width: 32%;
    margin-top: 20px;
  }

  .thanks__button {
    margin-top: auto;
  }

  .thanks__image {
    position: absolute;
    top: -61px;
    right: 42px;
    width: 490px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 769px) {
  .thanks {
    width: 100%;
    height: 100%;
    padding: 32px 26px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    .thanks__title {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 64px;
      line-height: 110%;
      letter-spacing: -0.04em;
      color: #fff;
    }

    .thanks__subtitle {
      font-family: var(--second-family);
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      color: #fff;
      text-align: center;
      width: 95%;
      margin-top: 20px;
    }

    .thanks__button {
      position: relative;
      z-index: 5;
      margin-top: auto;
      width: 100%;
    }

    .thanks__image {
      position: absolute;
      top: 207px;
      left: -52px;
      width: 490px;
    }
  }
}
</style>
