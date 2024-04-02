<template>
  <div class="partners">
    <div class="partners__bg">
      <img :src="!isMobile() ? '../../public/partners-bg.png' : '../../public/evgen-mobile.png'" alt="">
    </div>

    <div class="partners-title">
      <span>Приветствую, партнер<br/> Меня зовут Женя</span><br/>

      <span><span class="arrow">→</span> Увлечен разработкой</span><br/>

      <span class="italic">цифровых продуктов</span>
    </div>

    <div class="partners-skills">
      <div class="partners-skills-wrapper">
        <p>Софтскилл:</p>

        <div class="partners-skills-list">
          <CustomTag v-for="(tag, index) of softskills" :key="index" :text="tag.text" :color="tag.color"/>
        </div>
      </div>

      <div class="partners-skills-wrapper">
        <p>Хардсилл:</p>

        <div class="partners-skills-list">
          <CustomTag v-for="(tag, index) of hardskills" :key="index" :text="tag.text" :color="tag.color"/>
        </div>
      </div>

      <div v-if="isMobile()" class="partners-swiper">
        <h3 class="partners-swiper__title">Блог в instagram</h3>

        <Swiper 
          :modules="modules"
          :slides-per-view="2"
          :space-between="12"
          navigation
          :loop="true"
          slide-next-class=".next"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          :swiper="swiper"

          class="partners-swiper-block"
        > 
          <SwiperSlide 
            v-for="(post, index) of instaPosts" 
            :key="index"
            class="partners-swiper-slide"
          >
            <a :href="post.link" class="partners-swiper-slide-content">
              <img :src="post.image" alt="">
            </a>

          </SwiperSlide>

          <span class="partners-swiper-block-insta">@totaketomake</span>
        </Swiper>
      </div>
    </div>

    <div v-if="!isMobile()" class="partners-swiper">
      <h3 class="partners-swiper__title">Блог в instagram</h3>

      <Swiper 
        :modules="modules"
        :slides-per-view="6"
        :space-between="16"
        navigation
        :loop="true"
        slide-next-class=".next"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :swiper="swiper"

        class="partners-swiper-block"
      > 
        <SwiperSlide 
          v-for="(post, index) of instaPosts" 
          :key="index"
          class="partners-swiper-slide"
        >
          <a :href="post.link" class="partners-swiper-slide-content">
            <img :src="post.image" alt="">
          </a>

        </SwiperSlide>

        <span class="partners-swiper-block-insta">@totaketomake</span>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomTag from '../ui/CustomTag.vue';
  // import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

  // Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import isMobile from '../helpers/isMobile';

  // Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiper =  useSwiper()

const softskills = [
  {
    text: 'В деле с 2019',
    color: 'green-tag',
  },
  {
    text: '>500 проектов ',
    color: 'grey-tag',
  },
  {
    text: '90% заказчиков рекомендуют меня знакомым',
    color: 'blue-tag',
  },
  {
    text: 'Прошел 4 курса у топовых дизайнеров индустрии',
    color: 'grey-tag',
  },
  {
    text: '«Эмпатия — главный скилл дизайнера»',
    color: 'green-tag',
  },
]

const hardskills = [
  {
    text: 'Figma',
    color: 'blue-tag',
  },
  {
    text: 'Webflow',
    color: 'grey-tag',
  },
  {
    text: 'UX/UI designer',
    color: 'green-tag',
  },
  {
    text: 'Adobe Photoshop',
    color: 'blue-tag',
  },
  {
    text: 'Базовый коппирайтинг',
    color: 'grey-tag',
  },
  {
    text: 'Брендинг',
    color: 'green-tag',
  },
  {
    text: 'Adobe Illustrator',
    color: 'blue-tag',
  },
]

const modules = [Navigation, Autoplay];
const instaPosts = [
  {
    link: '#',
    image: 'public/post-1.png'
  },
  {
    link: '#',
    image: 'public/post-2.png'
  },
  {
    link: '#',
    image: 'public/post-3.png'
  },
    {
    link: '#',
    image: 'public/post-4.png'
  },
  {
    link: '#',
    image: 'public/post-5.png'
  },
    {
    link: '#',
    image: 'public/post-1.png'
  },
  {
    link: '#',
    image: 'public/post-2.png'
  },
  {
    link: '#',
    image: 'public/post-3.png'
  },
    {
    link: '#',
    image: 'public/post-4.png'
  },
  {
    link: '#',
    image: 'public/post-5.png'
  },
]


const onSwiper = (swiper) => {console.log(swiper);};
const onSlideChange = () => { console.log('slide change');};
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.partners {
  border-radius: 64px;
  width: 100%;
  height: 1240px;
  position: relative;
  padding: 64px 64px 78px 64px;
  overflow: hidden;
}

.partners__bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.partners-title {
  z-index: 5;
  position: relative;
  color: $color-grey-39;
  width: 60%;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 64px;
  line-height: 110%;
  letter-spacing: -0.04em;
  text-align: start;
  padding-bottom: 25px;
  border-bottom: 1px solid #2a2a2a;;
}

.arrow {
  color: $color-blue;
}

.italic {
  font-family: var(--font3);
  font-style: italic;
  font-weight: 600;
}

.partners-skills {
  position: relative;
  z-index: 5;
  width: 60%;
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.partners-skills-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  &:first-of-type {
    width: 55%;
  }

  &:last-of-type {
    width: 40%;
  }

  p {
    color: $color-grey;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
  }
}

.partners-skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.partners-swiper {
  position: relative;
  z-index: 5;
  width: 120%;
  margin-top: 64px;
  color: $color-grey;
}

.partners-swiper__title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 83%;
  letter-spacing: -0.04em;
  text-align: left;
  margin-bottom: 32px;
}

.partners-swiper-block {
  border-radius: 20px;
  padding: 16px;
  width: 100%;
  height: 352px;
  backdrop-filter: blur(33.79999923706055px);
  background: linear-gradient(167deg, rgba(255, 255, 255, 0.8) 0%, rgba(235, 238, 242, 0.8) 100%);
  align-items: flex-start;
}

.partners-swiper-slide a{
  display: flex;
  width: 100%;
  // width: 20% !important;
}


.partners-swiper-slide-content {
  width: 100%;
  display: flex;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.swiper-slide-active {
  width: 320px !important;
  height: 320px !important;
}

.partners-swiper-block-insta {
  position: absolute;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  top: 290px;
  left: 360px;
}

@media (max-width: 768px) {
  .partners {
    height: fit-content;
    padding: 42px 20px 0px 20px;
  }

  .partners__bg {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    // overflow: hidden;
    height: 976px;
    // position: relative;

    img {
      width: 100%;
      object-fit:cover;
    }
  }

  .partners-title {
    z-index: 5;
    position: relative;
    color: $color-grey-39;
    width: 100%;
    border-bottom: none;
    padding-bottom: 0;

    font-size: 32px;
    text-align: center;
  }

  .arrow {
    color: $color-blue;
  }

  .italic {
    font-family: var(--font3);
    font-style: italic;
    font-weight: 600;
  }

  .partners-skills {
    width: 100%;
    backdrop-filter: blur(33.79999923706055px);
    background: linear-gradient(167deg, rgba(255, 255, 255, 0.8) 0%, rgba(235, 238, 242, 0.8) 100%);
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 366px;
    padding: 10px 10px 40px 10px;
    border-radius: 20px;
  }

  .partners-skills-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;

    &:first-of-type {
      width: 100%;
    }

    &:last-of-type {
      width: 100%;
    }

    p {
      color: $color-grey;
      font-family: var(--font-family);
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
    }
  }

  .partners-skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .partners-swiper {
    position: relative;
    z-index: 5;
    width: 122%;
    margin-top: 24px;
    color: $color-grey;
  }

  .partners-swiper__title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 24px;
    line-height: 83%;
    letter-spacing: -0.04em;
    text-align: left;
    margin-bottom: 32px;
  }

  .partners-swiper-block {
    border-radius: 20px;
    padding: 0;
    width: 100%;
    height: 195px;
    backdrop-filter: none;
    background: none;
    align-items: flex-start;

    @media (max-width: 769px) {
      height: 217px;
    }
  }

  .partners-swiper-slide {
    width: calc(50% - 6px) !important;
  }

  .partners-swiper-slide a{
    display: flex;
    width: 100%;
    // width: 20% !important;
  }


  .partners-swiper-slide-content {
    width: 100%;
    display: flex;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .swiper-slide-active {
    width: calc(50% - 6px) !important;
    height: 232px !important;
  }

  .partners-swiper-block-insta {
    position: relative;
    top: 0px;
    bottom: -32px;
    left: 0px;
    height: fit-content;
    display: flex;
    text-align: left;
    z-index: 6;
  }
}
</style>