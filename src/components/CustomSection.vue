<template>
  <section class="section" :class="color">
    <div class="section-header">
      <div class="section-header-tags">
        <CustomTag 
          v-for="(tag, index) in tags" 
          :key="index"
          :text="tag.text" 
          :color="tag.color" 
          :type="tag.type"
        />
      </div>

      <CustomTag 
        :text="price.text" 
        :color="price.color" 
        :type="price.type"
        class="section-header-price"
      />
    </div>

    <div class="section-bottom">
      <p :class="['section-bottom__title', colorTitle]">
        {{ title }}
      </p>  

      <div class="section-bottom-text">
        <p 
          v-for="(text, index) of description" 
          :key="index"
          class="section-bottom-text__item"
        >
          {{ text }}
        </p>


      </div>

      <CustomButton 
        v-if="button || isMobile" 
        :color="button?.color || 'gray-link'" 
        :text="button?.text || 'Обсудить проект'" 
        :background="button?.background || 'fill'" 
        :disabled="button?.disabled"
        @click="onclick"
        class="section-bottom-button"
      />

      <CustomLink 
        v-if="!isMobile"
        :color="link?.color"
        background="transparent"
        class="section-bottom-link"
        @click="onclick"
      />

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import CustomTag from '../ui/CustomTag.vue';
import CustomButton from '../ui/CustomButton.vue';
import CustomLink from '../ui/CustomLink.vue';
import { TagType, LinkType, ButtonType } from "../types/index";

defineProps<{
  title: string;
  tags: TagType[];
  price: TagType;
  description: string[];
  link?: LinkType; 
  button?: ButtonType;
  onclick?: any;
  color: 'white' | 'green' | 'blue' | 'grey';
  colorTitle?: "blue-title" | 'grey-title' | 'white-title'; 
}>()

const isMobile = computed(() => {
  return window?.screen.width < 768
})
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";
@import "../assets/styles/global.scss";

.section {
  min-height: 460px;
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 64px;

  &.white {
    background: $color-white;
  }

  &.green {
    max-width: 614px;
    height: 520px;

    & .section-bottom {

    }
  }

  &.blue {

    .section-bottom .section-bottom-text {

      & .section-bottom-text__item {
        color: $color-white;
      }
      & .section-bottom-text__item:first-of-type {
        max-width: 220px;
      }
    } 

    .section-bottom__title {

      &.white-title {
        color: $color-white;
        font-size: 80px;
      }
    }

  }

  &.grey {
    background: $color-grey-bg;


    .section-bottom .section-bottom-text {

      & .section-bottom-text__item:first-of-type {
        max-width: 290px;
      }

      & .section-bottom-text__item {
        color: $color-white;
        max-width: 335px;
      }
    } 

    .section-bottom__title.white-title {
        color: $color-green;
      }
    }
}

.section-header {
  display: flex;
  // padding: 40px 64px 0 64px;
  justify-content: space-between;
}

.section-header-tags {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
} 

.section-bottom {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
}

.section-bottom__title {
  color: $color-blue;
  font-family: 'Playfair Display', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 128px;
  line-height: 110%;
  letter-spacing: -0.04em;
  text-align: start;


  &.grey-title {
    color: $color-black-07 !important;
    font-size: 80px;
  } 
}

.section-bottom-text {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 661px;
  align-items:flex-start;
}

.section-bottom-text__item {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: $color-black;
  max-width: 330px;
  text-align: start;

  &.blue-title {
    color: $color-black-07 !important;
    background: none !important;
  } 
}

.section-bottom-button, .section-bottom-link {
  margin-left: auto;
}

.green {
  width: 40%;
}

.blue  {
  width: 60%;
}

@media (max-width: 768px) {

.section {
  min-height: 460px;
  width: 100%;
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 20px;

  .section-header .section-header-tags {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
  } 

  .section-bottom {
    row-gap: 24px;

    .section-bottom__title {
      width: 100%;
      font-size: 64px;
      text-align: center;
      margin-top: 90px;
    }

    .section-bottom-text {
      // margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;

      .section-bottom-text__item {
        text-align: center;
        font-weight: 500;
      }
    }

    .section-bottom-button {
      width: 100%;
    }
  }

  &.white {
    background: $color-white;
  }

  &.green {
    max-width: none;
    height: fit-content;

    & .section-bottom {

    }
  }

  &.blue {
    height: fit-content;

    .section-bottom .section-bottom-text {

      .section-bottom-text__item {
        color: $color-white;
        width: 100%;
        text-align: center;
      }

      & .section-bottom-text__item:first-of-type {
        max-width: 80%;
        margin: 0 auto;
      }
    } 

    .section-bottom__title {

      &.white-title {
        color: $color-white;
        font-size: 65px;
      }
    }

  }

  &.grey {
    background: $color-grey-bg;

    .section-bottom__title {
      -webkit-hyphens: manual;
      -ms-hyphens: manual;
      hyphens: manual;
      word-break: break-all;
    }

    .section-bottom .section-bottom-text {

      & .section-bottom-text__item:first-of-type {
        // max-width: 290px;
      }

      & .section-bottom-text__item {
        color: $color-white;
        max-width: none !important;
        text-align: center;
        width: 100%;
      }
    } 

    .section-bottom__title.white-title {
        color: $color-green;
      }
    }
}

.section-header {
  display: flex;
  // padding: 40px 64px 0 64px;
  justify-content: space-between;
}

.section-bottom {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
}

.section-bottom__title {
  color: $color-blue;
  font-family: 'Playfair Display', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 128px;
  line-height: 110%;
  letter-spacing: -0.04em;
  text-align: start;


  &.grey-title {
    color: $color-black-07 !important;
    font-size: 80px;
  } 
}

.section-bottom-text {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 661px;
  align-items:flex-start;
}

.section-bottom-text__item {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: $color-black;
  max-width: 330px;
  text-align: start;

  &.blue-title {
    color: $color-black-07 !important;
    background: none !important;
  } 
}

.section-bottom-button, .section-bottom-link {
  margin-left: auto;
}

.green {
  width: 100%;
}

.blue  {
  width: 100%;
}
}
</style>