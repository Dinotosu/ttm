<template>
  <div class="custom-popup">
    <div v-if="isOpen" class="popup-content">
      <slot name="main"/>
      <button class="popup-close" @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue';

const props = defineProps<{
  state: boolean;
}>();

const emit =  defineEmits<{
  (e: 'close', value: boolean): void;
}>()

const isOpen = ref(props.state);

const closePopup = () => {
  emit('close', isOpen.value)
  isOpen.value = false;
}
</script>

<style scoped>
.custom-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  display: flex;
  background: #fff;
  /* padding: 37px 0px 44px 0px; */
  border-radius: 32px;
}

.popup-close {
  position: fixed;
  top: 50px;
  right: 100px;
}

@media (max-width: 769px) {

  .popup-content {
    display: flex;
    background: #fff;
    /* padding: 32px 0px 32px 0px; */
    border-radius: 32px;
    width: 90%;
    height: 650px;
  }

  .popup-close {
    position: fixed;
    top: 766px;
    left: 50%;
    transform: translateX(-50%);
    height: fit-content;
  }
}
</style>
