<template>
  <div class="with-form">
    <h2 class="with-form__title">
      {{ title }}
    </h2>

    <div class="with-form-middle">
      <slot name="middle"/>
    </div>

    <PhoneForm class="form-on-picture" @submit="(e) => emit('submit', e)"/>

    <div class="with-form-image">
      <img :src="bgImage" class="with-form__bg">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, reactive, ref, watch, defineEmits } from 'vue';
import 'vue-tel-input/vue-tel-input.css';
import PhoneForm from './PhoneForm.vue';

defineProps<{
  title: string;
  bgImage?: string;
}>()

const emit = defineEmits<{
  (e: 'submit', value: any): void
}>()

</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.with-form {
  position: relative;
  height: fit-content;
  width: 100%;
  padding: 0 64px;
  padding-top: 48px;
  padding-bottom: 93px;
}

.with-form__title {
  padding-top: 138px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: -0.04em;
  color: #fff;
  width: 600px;
  text-align: left; 
  z-index: 5;
  position: relative;
}

.with-form__bg {
  position: absolute;
  bottom: 0px;
  z-index: 0;
  right: 64px;
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

@media (max-width: 768px) {
  .with-form {
    position: relative;
    height: fit-content;
    width: 100%;
    padding: 0 20px;
    // padding-top: 48px;
    padding-bottom: 40px;
    
    &.phone-form:nth-of-type(2n) {
      margin-bottom: 40px;

      .with-form__title {
        width: 80%;  
        text-align: center;   
        margin: 0 auto;
      }


      .with-form__bg {
        position: absolute;
        bottom: none;
        z-index: 0;
        left: 50%;
        transform: translateX(-50%);
        top: 580px;
      }

      .form-on-picture {
        margin-top: 280px;
      }
    }
  }

  .with-form__title {
    font-weight: 400;
    font-size: 60px;
    line-height: 110%;
    letter-spacing: -0.04em;
    width: 120%;
    z-index: 5;
    position: relative;
    padding-top: 110px;
  }

  .with-form__bg {
    position: absolute;
    bottom: none;
    z-index: 0;
    right: -125px;
    top: 400px;
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
}
</style>