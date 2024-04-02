<template>
  <form class="with-form-form">
      <div class="with-form-form-name">
        <span>Как вас зовут?</span>

        <input name="name" placeholder="Введите имя" class="with-form-form-name-input name" maxlength="30" type="text"/>

      </div>

      <div class="with-form-form-name">
        <span>Телефон</span>

        <VueTelInput v-model="data.phone" class="with-form-form-name-input" aria-placeholder="" @country-changed="country"/>
      </div>

      <div class="with-form-form-checkbox">
        <input type="checkbox" v-model="data.name" name="agree" class="with-form-form-checkbox__input">

        <label for="agree" class="with-form-form-checkbox-label">Даю согласие с политикой обработки и использования персональных данных</label>
      </div>

      <CustomButton color="blue-link" background="fill" text="Обсудить проект" class="with-form-form-button" @click="emit('submit', data)"/>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import CustomButton from '../ui/CustomButton.vue';

const emit = defineEmits<{
  (e: 'submit', value: {name: string; phone: string;}): void
}>()

const data = ref<{
  name: string;
  phone: string;
}>({
  name: '',
  phone: '',
});
</script>

<style scoped lang="scss">
 @import '../assets/styles/colors.scss';

.with-form-form {
  display: flex;
  // width: 1160px;
  // height: 132px;
  border-radius: 64px;
  backdrop-filter: blur(33.79999923706055px);
  background: rgba(31, 32, 40, 0.58);
  position: relative;
  z-index: 5;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 31px 40px;

  .with-form-form-name  {
    justify-content: center;
    position: relative;
    color: $color-white;
    
    & span {
      position: absolute;
      top: -70px;
      left: 0;
    }
  }
}


.with-form-form-checkbox {
  display: flex;
  gap: 20px;

  .with-form-form-checkbox__input {
    width: 20px;
    margin: 0px;
  }

  .with-form-form-checkbox-label {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.04em;
    color: #fff;
    width: 188px;
    text-align: start;
  }
}

.with-form-middle {
  margin-top: 32px;
}

.vue-tel-input.with-form-form-name-input, .with-form-form-name-input {
  border-radius: 70px;
  width: 305px;
  height: 70px;
  background: #1d1f26;
  border: none;
  color: $color-white;

  .vti__input {
    background: none !important;
    color: $color-white;
  }

  &.name {
    padding-left: 28px;

    &:focus-visible {
      border: none;
    }
  }
}

@media  (max-width: 1024px) {
  .with-form-form {
    display: flex;
    width: 100%;
    border-radius: 64px;
    backdrop-filter: blur(33.79999923706055px);
    background: rgba(31, 32, 40, 0.58);
    position: relative;
    z-index: 5;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
    padding: 32px 14px;

    .with-form-form-name  {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: $color-white;
      width: 100%;
      flex-direction: column;
      
      & span {
        position:static;
        margin-bottom: 20px;
        // top: -40px;
        // left: 50%;
        // transform: translateX(-50%);
      }
    }
  }


  .with-form-form-checkbox {
    display: flex;
    gap: 20px;

    .with-form-form-checkbox__input {
      width: 20px;
      margin: 0px;
    }

    .with-form-form-checkbox-label {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      letter-spacing: 0.04em;
      color: #fff;
      width: 188px;
      text-align: start;
    }
  }

  .with-form-middle {
    margin-top: 32px;
  }

  .with-form-form-button {
    width: 100%;
  }

  .vue-tel-input.with-form-form-name-input, .with-form-form-name-input {
    border-radius: 70px;
    width: 100%;
    height: 70px;
    background: #1d1f26;
    border: none;
    color: $color-white;

    .vti__input {
      background: none !important;
      color: $color-white;
    }

    &.name {
      padding-left: 28px;

      &:focus-visible {
        border: none;
      }
    }
  }
}
</style>