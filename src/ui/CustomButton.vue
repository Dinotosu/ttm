<template>
  <button :class="[{disabled: disabled}, color, background, 'button']">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ButtonType } from '../types';

defineProps<ButtonType>();
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.button {
  border-radius: 64px;
  padding: 24px 32px;
  // width: 196px;
  height: 70px;
  transition: all 0.3s;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.black {
  background: $color-black;
  color: $color-white;

  &:hover, &:active {
    background:  $color-white;
    color: $color-blue;
    border: none;
    transform: scale(1.01);
  }
}

.blue {
  background: $color-blue;
  color: $color-white;

  &:hover, &:active {
    background:  $color-white;
    color: $color-blue;
    border: none;
    transform: scale(1.01);
  }
}

.green {
  background: $color-green;
  color: $color-grey;

  &:hover, &:active {
    background:  $color-white;
    color: $color-green;
    border: none;
    transform: scale(1.01);
  }
}

.white {
  background: $color-white;
  color: $color-blue;

  &:hover, &:active {
    background:  $color-blue;
    color: $color-white;
    border: none;
    transform: scale(1.01);
  }
}

.disabled {
  background: $color-grey-de;
  color: $color-grey-14;

  &:hover, &:active {
    background: $color-grey-de;
    color: $color-grey-14;
    border: none;
    transform: none;
  }
}

.transparent {
  background: none;
  border: 1px solid $color-green-grey;
  color: $color-green-grey;
  border-radius: 40px;
  padding: 22px 30px !important;
  height: 61px;

  &:hover, &:active {
    background: none;
    border: 1px solid $color-blue;
    color: $color-blue;
    transform: none;
  }
}
</style>
