<template>
  <span class="tag" :class="color">
    {{ text }}
  </span>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { TagType } from '../types';

defineProps<TagType>()
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.tag {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 73px;
  padding: 11px 15px;
  width: fit-content;
  height: fit-content;

  &.green-link {
    background: $color-green;
  }
}

.black {
  background: $color-black;
  color: $color-white;
}

.blue-tag {
  color: $color-white;
  background: $color-blue;
}

.transparent-tag {
  background: $color-black-07;
  color: $color-white;
}

.green-tag {
  background: $color-green;
  color: $color-grey;
}

.grey-tag {
  background: $color-grey-tag;
  color: $color-white;
}

@media (max-width: 768px) {
  .tag {
    font-size: 12px;
  }
}
</style>