<template>
  <a :class="[color, 'link']" :href="to" @mouseover="isHover = true" @mouseleave="isHover = false" target="_blank">
    <img :src="color === 'green-link' || !isHover ? '/arrow-dark.svg' : '/arrow-white.svg'"/>
  </a>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { LinkType } from '../types';

defineProps<LinkType>()

const isHover = ref(false);
</script>

<style scoped lang="scss">
@import '../assets/styles/colors.scss';

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 64px;
  padding: 24px 32px;
  width: 86px;
  height: 70px;
  cursor: pointer;
}

.link.green-link {
  background: $color-green-grey;

  &:hover, &:active {
    background: $color-dark;
  }
}

.link.grey-link {
  background: $color-light-grey;

  &:hover, &:active {
    background: $color-dark;
  }
}
</style>