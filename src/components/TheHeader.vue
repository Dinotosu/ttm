<template>
  <header class="header">
    <a class="header-icon" href="#">
      <img src="../../public/totaketomake-icon.svg"/>
    </a>

    <ul v-show="!screenIsMobile" class="header-links">
      <a 
        v-for="(link, index) of links" 
        :key="index" 
        :href="link.link"
        class="header-links__item"
      >
        {{ link.name }}
      </a>
    </ul>

    <div
      @click="changeMenu()"
    >
      <img 
        v-show="screenIsMobile" 
        src="../../public/burger-icon.svg" 
        alt="" 
      />
    </div>

    <div class="header-mobile" v-show="showMenu">

      <div class="header-mobile-menu">

        <a class="header-icon" href="#">
          <img src="../../public/totaketomake-icon.svg"/>
        </a>

        <div class="header-close" @click="showMenu = false">
          <img src="../../public/icon-cross.svg"/>
        </div>

        <ul v-show="showMenu" class="header-links">
          <a 
            v-for="(link, index) of links" 
            :key="index" 
            :href="link.link"
            class="header-links__item"
          >
            {{ link.name }}
          </a>
        </ul>

        <span>
          Разработать сайт — не цель.<br/>
          <strong>Цель</strong> — привлечь клиентов!
        </span>

        <CustomButton 
          background="fill" 
          color="black-link" 
          text="Сотрудничество со мной"
          class="header-mobile-menu__button"
        />
      </div>
    </div>

    <div v-if="showMenu" class="overlay"></div>
  </header>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import CustomButton from '../ui/CustomButton.vue';

const links = [
  { 
    link: '#services',
    name: 'услуги'
  },
  { 
    link: '#cases',
    name: 'кейсы'
  },
  { 
    link: '#stages',
    name: "этапы работы"
  },
  { 
    link: '#whoim',
    name: "кто я?"
  },
  { 
    link: '#contacts',
    name: "контакты"
  },
]

const screenIsMobile = computed(() => {
  return 768 > window.screen.width
});
const showMenu = ref(false);
const changeMenu = () => {
  console.log(showMenu.value);
  showMenu.value = !showMenu.value;
}

</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.header {
  position: absolute;
  top: 44px;
  left: 64px;
  display: flex;
  flex-direction: row;
  gap: 64px;
  align-items: center;
  z-index: 6;
}

.header-icon {
  display: flex;
  width: 76px;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.header-links {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 40px;
}

.header-links__item {
  color: $color-black;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover, &:active {
    color: $color-green;
  }
}

@media (max-width: 768px) {
  .header {
    position: absolute;
    top: 32px;
    left: 50%;
    display: flex;
    flex-direction: row;
    gap: 64px;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    transform: translateX(-50%);
  }

  .header-icon {
    display: flex;
    width: 76px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .header-links {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    gap: 40px;
  }

  .header-links__item {
    color: $color-black;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover, &:active {
      color: $color-green;
    }
  } 

  .header-mobile {
    width: 370px;
    height: 670px;
    background: #fff;
    position: absolute;
    top: -32px;
    right: -20px;
    z-index: 9999;
    border-radius: 32px 0 0 32px;
    padding: 32px 20px;
    display: flex;

    &-menu {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      gap: 24px;
      width: 100%;

      .header-links {
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: flex-end;

        .header-links__item {
          font-family: var(--third-family);
          font-weight: 400;
          font-size: 24px;
          color: #000;
        }
      }

      .header-mobile-menu__button {
        width: 100%;
      }
    }

    .header-close {
      display: flex;
      width: 48px;
      position: absolute;
      top: 20px;
      right: 20px;
      
      img {
        width: 100%;
      }
    }

    .header-icon {
      width: 76px;
      position: absolute;
      top: 32px;
      left: 20px;
    }
  }

  .overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: #000;
    opacity: 0.2;
    left: -21px;
    top: -44px;
    z-index: 6;

    position: fixed; 
    overflow-y: hidden;
  }
}

</style>