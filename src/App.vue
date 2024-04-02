<template>
  <body class="container">
    <TheHeader/>

    <main class="main">
      <section class="resolve-problems">
        <h1 class="resolve-problems__title">
          Решаю проблемы <br/> бизнеса своих клиентов <p>при помощи сайтов</p>
        </h1>

        <div class="resolve-problems__image">
          <img src="../public/macbook-long.png" alt="">
        </div>
      </section>

      <section class="recommendation">
        <h2 class="recommendation-percent">90%</h2>

        <div class="recommendation-context">
          <span class="recommendation-context__title">заказчиков рекомендуют<br/> меня своим знакомым</span>

          <CustomButton 
            background="fill" 
            color="black-link" 
            text="Обсудить проект"
            class="recommendation-context__button"
            @click="openPopup" 
          />
        </div>
      </section>

      <div class="how-help">Чем могу помочь</div>

      <CustomSection 
        color="white"
        title="Сайт «под ключ»"
        :price="{ text: 'от 300$', type: 'price', color: 'blue-tag' }"
        :tags="[
          {text: 'Малый и средний бизнес', type: 'tag', color: 'black'}, 
          {text: 'Редизайн', type: 'tag', color: 'black'}, 
          {text: 'Стартап', type: 'tag', color: 'black'}
        ]"
        :description="
          [
            'Разработаю лендинг или несложный многостраничный сайт под ключ', 
            'Все хлопоты, в виде прототипа, дизайна, верстки и програмирования возьму на себя'
          ]"
        :button="
          { text: 'Обсудить проект',
            background: 'fill', 
            color: 'black-link'
          }"
        :onclick="openPopup"
        />

        <CustomSection 
        color="green"
        title="Рекламные креативы"
        :price="{ text: 'от 30$', type: 'price', color: 'blue-tag' }"
        :tags="[
          {text: 'Маркетолог', type: 'tag', color: 'transparent-tag' }, 
          {text: 'Таргетолог', type: 'tag', color: 'transparent-tag'}, 
          {text: 'SMM-спец', type: 'tag', color: 'transparent-tag'}
        ]"
        :description="
          [
            'Разработаю конверсионные рекламные креативы, которые донесут ценность продукта до ЦА в полном объеме'
          ]"
        color-title="grey-title"
        :link="{to: '', background: 'fill', color: 'dark-green-link'}"
        :onclick="openPopupPhone"
        />

        <CustomSection 
        color="blue"
        title="Дизайн сайтов"
        :price="{ text: 'от 30$', type: 'price', color: 'green-tag' }"
        :tags="[          
          {text: 'Маркетолог', type: 'tag', color: 'transparent-tag' }, 
          {text: 'Таргетолог', type: 'tag', color: 'transparent-tag'}, 
          {text: 'SMM-спец', type: 'tag', color: 'transparent-tag'}
        ]"
        :description="
          [
            'Разработаю только дизайн \n для любого вида сайта ', 
            'Подготовлю проект к программированию и Вы сможете передать проект своему специалисту'
          ]"
        :link="{ to: '#', color: 'green-link' }"
        class="site-design"
        color-title="white-title"
        :onclick="openPopup"
        />

        <CustomSection 
          color="grey"
          title="Презентации"
          :price="{ text: 'от 500$', type: 'price', color: 'green-tag' }"
          :tags="[
            {text: 'Малый и средний бизнес', type: 'tag', color: 'black' }, 
            {text: 'Редизайн', type: 'tag', color: 'black'}, 
            {text: 'Стартап', type: 'tag', color: 'black'},
            {text: 'SMM-спец', type: 'tag', color: 'black'}, 
          ]"
          :description="
            [
              'Разработаю дизайн презентаций вашего проекта', 
              'Под любой девайс. Отдаю всех исходники в Figma с возможностью дальнейшего самостоятельного редактирования'
            ]"
          :button="
            { text: 'Обсудить проект',
              background: 'fill', 
              color: 'green-link'
            }"
          color-title="white-title"
          :onclick="openPopupPhone"
        />

        <CustomSectionWithForm 
          title="Впервые решились на создание сайта?" 
          bg-image="./with-form-1.png"
          @submit="isOpenThanks = true"
        >
          <template #middle>
            <div class="first-try">

              <span class="first-try__title">Все бываетв первый раз :)</span>

              <p class="first-try__description">
                Оставьте свои контакты, я свяжусь с вами 
                и мы обсудим, <strong>какой вариант сайта</strong> подходит конкретно Вам
              </p>
            </div>
          </template>
        </CustomSectionWithForm>

        <LovedProjectsSection :cards="cases" :cases-without-images="casesWithoutImages"/>

        <CustomSectionWithForm 
          title="Уже есть сайт, но он плохо работает?" 
          bg-image="./with-form-2.png" 
          class="phone-form"
          @submit="isOpenThanks = true"
        >
          <template #middle>
            <div class="free-audit">

              <CustomButton color="blue-link" background="fill" text="бесплатный аудит"/>

              <p class="first-try__description">
                Укажу на слабые и сильные стороны нынешнего сайта,  и<strong> вышлю краткий видео-разбор </strong>
              </p>
            </div>
          </template>
        </CustomSectionWithForm>

        <RoadmapSection @submit="isOpenThanks = true"/>

        <span class="why-you-can-trust">Почему стоит доверить разработку сайта именно мне?</span>

        <PartnersSectionVue />

        <FAQSection/>

        <TheFooter @talk-about-project="isOpenPopupPhone = true"/>

        <CustomPopup v-if="isOpenPopup" @close="isOpenPopup = false" :state="isOpenPopup">
          <template #main>
            <div v-if="!lastScreen" class="questions">
              <CustomQuestionPage
                :current-page="1"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 1 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Для какого товара / продукта / услуги необходим сайт?
                    </h3>

                    <input v-model="interview.yourSphere" class="input" placeholder="Чем вы занимаетесь?"/>
                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="2"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 2 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Какой вид сайта необходим?
                    </h3>

                    <div class="selector">
                      <div class="selector-element">
                        <input type="radio" id="landing" value="landing" v-model="interview.siteType" />
                        <label for="landing">лендинг-пейдж</label>
                      </div>
                      
                      <div class="selector-element">
                        <input type="radio" id="multipage" value="multipage" v-model="interview.siteType" />
                        <label for="multipage">многостраничный сайт</label>
                      </div>

                      <div class="selector-element">
                        <input type="radio" id="emarket" value="emarket" v-model="interview.siteType" />
                        <label for="emarket">интернет-магазин</label>
                      </div>

                      <div class="selector-element">
                        <input type="radio" id="dtn" value="dtn" v-model="interview.siteType" />
                        <label for="dtn">Пока не определился</label>
                      </div>
                    </div>

                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="3"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 3 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Какое главное действие должен совершить пользователь на вашем сайте?
                    </h3>

                    <div class="checkboxes">
                      <div class="checkbox-item">
                        <input type="checkbox" id="buy" value="buy" v-model="interview.userAction">
                        <label for="buy">Купить товар/услугу</label>
                      </div>

                      <div class="checkbox-item">
                        <input type="checkbox" id="form" value="form" v-model="interview.userAction">
                        <label for="form">Заполнить форму</label>
                      </div>

                      <div class="checkbox-item">
                        <input type="checkbox" id="contacts" value="contacts" v-model="interview.userAction">
                        <label for="contacts">Оставить свои контактные данные</label>
                      </div>
                    </div>
                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="4"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 4 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Готов ли сейчас контент для сайта (фото/текста/видео)?
                    </h3>

                    <div class="selector">
                      <div class="selector-element">
                        <input type="radio" id="yes" :value="true" v-model="interview.contentIsReady" />
                        <label for="yes">Да, готовы</label>
                      </div>
                      
                      <div class="selector-element">
                        <input type="radio" id="no" :value="false" v-model="interview.contentIsReady" />
                        <label for="no">Нет, еще не готовы</label>
                      </div>
                    </div>
                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="5"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 5 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Планируемый бюджет
                    </h3>

                    <input v-model="interview.budget" class="input" placeholder="Примерная сумма денег в BYN, либо USD"/>
                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="6"
                :sum-pages="7"
                @next="increment"
                @prev="dencrement"
                :class="{ 'active': questions === 6 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Для какого товара / продукта / услуги необходим сайт?
                    </h3>

                    <span class="page__subtitle">1 пункт = 1 неделя</span>

                    <Slider class="slider" :min="1" :max="10" v-model="interview.deadlines"/>
                  </div>
                </template>
              </CustomQuestionPage>

              <CustomQuestionPage
                :current-page="7"
                :sum-pages="7"
                @next="lastScreen = true"
                @prev="dencrement"
                :class="{ 'active': questions === 7 }"
              >
                <template #body>
                  <div class="page">
                    <h3 class="page__title">
                      Ваш номер телефона
                    </h3>

                    <VueTelInput v-model="interview.phone" class="with-form-form-name-input" aria-placeholder="" @country-changed="country"/>
                  </div>
                </template>
              </CustomQuestionPage>
            </div>

            <ThankScreen v-if="lastScreen" @redirect="end"/>
          </template>
        </CustomPopup>

        <CustomPopup v-if="isOpenPopupPhone" @close="isOpenPopupPhone = false" :state="isOpenPopupPhone">
          <template #main>
            <div v-if="!lastScreen" class="phone-form">
              <div class="phone-form-page">
                <h3>
                  Оставьте ваши контакты и я обязательно свяжусь с вами
                  для обсуждения вашей задачи
                </h3>

                <form class="with-form-form">
                  <div class="with-form-form-name">
                    <span>Как вас зовут?</span>

                    <input name="name" placeholder="Введите имя" class="with-form-form-name-input name" maxlength="30" type="text"/>

                  </div>

                  <div class="with-form-form-name page">
                    <span>Телефон</span>

                    <VueTelInput v-model="phone" class="with-form-form-name-input" aria-placeholder="" @country-changed="country"/>
                  </div>

                  <CustomButton color="black-link" @click="lastScreen = true" background="fill" text="Отправить" class="with-form-form-button"/>
              </form>
              </div>
            </div>

            <ThankScreen v-if="lastScreen" @redirect="end"/>
          </template>
        </CustomPopup>

        <CustomPopup v-if="isOpenThanks" @close="isOpenThanks = false" :state="isOpenThanks">
          <template #main>
            <ThankScreen @redirect="end"/>
          </template>
        </CustomPopup>
    </main>
  </body>
</template>

<script setup lang="ts">
import CustomButton from "./ui/CustomButton.vue";
import CustomSection from "./components/CustomSection.vue";
import TheHeader from "./components/TheHeader.vue";
import CustomSectionWithForm from "./components/CustomSectionWithForm.vue";
import LovedProjectsSection from "./components/LovedProjectsSection.vue";
import RoadmapSection from './components/RoadmapSection.vue';
import PartnersSectionVue from "./components/PartnersSection.vue";
import FAQSection from "./components/FAQSection.vue";
import TheFooter from "./components/TheFooter.vue";
import CustomPopup from "./ui/CustomPopup.vue";
import { ref } from "vue";
import CustomQuestionPage from "./ui/CustomQuestionPage.vue";
import CustomRange from "./ui/CustomRange.vue";
import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import ThankScreen from "./components/ThankScreen.vue";


const isOpenPopup = ref(false);
const isOpenPopupPhone = ref(false);
const isOpenThanks = ref(false);
const openPopup = () => {
  isOpenPopup.value = !isOpenPopup.value;
  lastScreen.value = false;
};
const openPopupPhone = () => {
  isOpenPopupPhone.value = !isOpenPopupPhone.value;
  lastScreen.value = false;
};
const questions = ref(1);
const lastScreen = ref(false);

const increment = () => {
  console.log(questions.value);
  if (questions.value < 7) {
    questions.value++
  }
}

const dencrement = () => {
  console.log(questions.value);


  if (questions.value > 1) {
    questions.value--
  }
}

const interview = ref({
  yourSphere: '',
  siteType: '',
  userAction: [],
  contentIsReady: false,
  budget: '',
  deadlines: 0,
  phone: ''
})

const end = () => {
  lastScreen.value = false;
  console.log(interview.value);
  isOpenPopup.value = false;
  isOpenPopupPhone.value = false;
  isOpenThanks.value = false;
  questions.value = 1;
}

const cases = [
{
  image: '../public/case-1.png',
  websiteLink: 'https://vk.com',
  title: 'Лендинг для технологичного велосипеда Cowboy4®',
  instaLink: 'https://vk.com',
},
{
  image: '../public/case-1.png',
  websiteLink: 'https://vk.com',
  title: 'Лендинг для технологичного велосипеда Cowboy4®',
  instaLink: 'https://vk.com',
},
{
  image: '../public/case-1.png',
  websiteLink: 'https://vk.com',
  title: 'Лендинг для технологичного велосипеда Cowboy4®',
  instaLink: 'https://vk.com',
}
]

const casesWithoutImages = [
{
  websiteLink: 'https://vk.com',
  description: 'Сайт-агрегатор для разработчиков',
  title: 'TextAT',
  instaLink: 'https://vk.com',
},
{
  title: 'Novis 009',
  description: 'Бухгалтерские услуги на аутсорс',
  instaLink: 'https://vk.com',
},
{
  websiteLink: 'https://vk.com',
  description: 'Стоматология семейного типа',
  title: 'DR.PRYSTUPA',
  instaLink: 'https://vk.com',
}
]
</script>

<style scoped lang="scss">
@import "./assets/styles/colors.scss";

.container {
  width: 100vw;
  // height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
}

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #000;
}

.resolve-problems {
  background: $color-white;
  width: 100%;
  // height: 600px;
  height: fit-content;
  border-radius: 64px 64px 0px 0px;
  padding-bottom: 113px;
}

.resolve-problems__title {
  color: black;
  // position: absolute;
  // padding: 153px 0px 0px 64px;
  padding: 153px 0px 0px 64px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 80px;
  line-height: 105%;
  letter-spacing: -0.04em;
  color: #1d1f26;
  max-width: 1092px;
  text-align: start;

  p {
    font-family: var(--font3);
    font-style: italic;
    font-weight: 600;
  }
}

.resolve-problems__image {
  display: flex;
  width: 757px;
  position: absolute;
  right: 0px;
  top: 20px;
  z-index: 5;

  img {
    width: 100%;
    object-fit: cover;
  }
}

.recommendation {
  position: relative;
  bottom: 80px; 
  border-radius: 64px;
  width: 1110px;
  height: 278px;
  background: $color-blue;
  display: flex;
  align-items: center;
  padding-left: 64px;
  gap: 20px;
}

.recommendation-percent {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 170px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: $color-blue;
  mix-blend-mode: plus-lighter;
}

.recommendation-context {
  width: 229px;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.recommendation-context__title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.01em;
  color: $color-white;
}

.how-help {
  margin: 0px 0px 64px 64px;
  color: $color-white;
  width: 100%;
  text-align: left;
}

.site-design {
  height: 520px;
}

.first-try {
  display: flex;
  width: 532px;
  text-align: start;
  margin-bottom: 85px;

  .first-try__title {
    font-family: var(--font7);
    font-weight: 500;
    font-size: 20px;
    line-height: 103%;
    color: #9fba00;
    transform: rotate(3deg);
    width: 185px;
  }

  .first-try__description {
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #fff;
    width: 335px;

    strong {
      font-weight: 700;
    }
  }
}

.with-form.phone-form {
  height: 800px;

  .with-form-image {
    background: red;
    // .with-form__bg {
    //   right: 0px;
    // }
  }
}

.free-audit {
  display: flex;
  width: 590px;
  text-align: start;
  margin-bottom: 85px;
  gap: 32px;

  .first-try__description {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #fff;
    width: 327px;

    strong {
      font-weight: 700;
    }
  }
}

.why-you-can-trust {
  padding: 0 22px;
  margin: 64px 0 32px 0;
  font-size: 24px;
}

@media (max-width: 1024px) {
  .resolve-problems {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .resolve-problems__title {
      color: black;
      // position: absolute;
      // padding: 153px 0px 0px 64px;
      padding: 100px 0px 0px 0px;
      font-size: 44px;
      text-align: center;
      width: 100%;
    }

    .resolve-problems__image {
      top: 328px;
      width: 343px;
      right: -118px;
      z-index: 4;
    }
  }

  .recommendation {
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
    padding-left: none;
    padding: 16px 20px;
    padding-bottom: 32px;

    .recommendation-percent {
      font-size: 128px;
    }

    .recommendation-context {
      width: 100%;

      .recommendation-context__button {
        z-index: 5;
        width: 100%;
      }
    }
  }

  .how-help {
    margin: 40px 0px 64px 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 24px;
  }

  .first-try {
    display: flex;
    flex-wrap: wrap;
    width: 57%;
    gap: 20px;
    font-size: 16px;
  }

  .with-form.phone-form {
    height: 1500px;
  }

  .free-audit {
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center
    ;
  }
}

.questions {
  padding: 37px 0px 44px 0px;
}
  // display: none;
  .interview {
    display: none;
  }

  .interview.active {
    display: flex;
  }
// }

.page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 0 40px;
  padding-top: 40px;

  &__title {
    font-family: var(--second-family);
    font-weight: 300;
    font-size: 20px;
    line-height: 150%;
    color: #000;
  }

  &__subtitle {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #000;
    margin-top: -16px;
    padding-bottom: 16px;
  }

  .input {
    border: 1px solid #ccd1d2;
    border-radius: 70px;
    width: 609px;
    height: 70px;
    background: none;
    padding-left: 28px;
    padding-right: 28px;
    color: #000;
  }

  .selector {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-element {
      display: flex;
      gap: 8px;

      label {
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #1d1f26;
      }
    }
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .checkbox-item {
      display: flex;
      gap: 8px;
      justify-content: flex-start;

      input {
        width: 24px;
      }

      label {
        color: #1d1f26;
      }
    }
  }

  .slider {
    width: 100%;

    .slider-base {
      background: red;
    } 
    .slider-connects {
      position: relative;

      &::before {
        content: '1';
        position: absolute;
        bottom: 10px;
        left: 0px;
      }
    }
  }

  .vue-tel-input.with-form-form-name-input {
  border-radius: 70px;
  width: 305px;
  height: 70px;
  background: #fff;
  border: none;
  color: $color-white;
  border: 1px solid #ccd1d2;
  align-items: center;

  .vti__dropdown {
    background-color: #fff !important;
  }

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

.phone-form {
  padding: 40px;
  max-width: 824px;

  .phone-form-page {
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;

    h3 {
      font-family: var(--second-family);
      font-weight: 400;
      font-size: 40px;
      line-height: 105%;
      text-align: center;
      color: #000;
      width: 90%;
    }

    .with-form-form {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 12px;

      .with-form-form-name  {
        justify-content: center;
        position: relative;
        color: $color-black;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        padding: 0;
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
        text-align: start;
      }
    }

    .with-form-middle {
      margin-top: 32px;
    }

    .vue-tel-input.with-form-form-name-input, .with-form-form-name-input {
      border-radius: 70px;
      width: 100%;
      height: 70px;
      background: none;
      border: 1px solid #ccd1d2 !important; 
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
}

@media (max-width: 769px) {
  .phone-form {
    padding: 32px 16px;
    max-width: 824px;

    .phone-form-page {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;   

      h3 {
        font-size: 32px;
        width: 100%;
      }

      .with-form-form {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 24px;
        flex-wrap: wrap;
        padding: 0;

        .with-form-form-name  {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          color: $color-white;
          width: 100%;
          flex-direction: column;
          gap: 12px;
                
          & span {
            position:static;
            color: $color-black;
          }
        }
      }
    }

    .with-form-form-button {
      width: 100%;
      margin-top: 20px;
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
}


@media (max-width: 769px) {


  
  .page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 0 16px;
  padding-top: 32px;
  width: 100%;

  &__title {
    margin: 0 auto;
  }

  &__subtitle {
    font-family: var(--second-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #000;
    margin: 0 auto;
    margin-top: -16px;
    padding-bottom: 16px;
  }

  .input {
    border: 1px solid #ccd1d2;
    border-radius: 70px;
    width: 100%;
    height: 70px;
    background: none;
    padding-left: 28px;
    padding-right: 28px;
    color: #000;
  }

  .selector {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &-element {
      display: flex;
      gap: 8px;

      label {
        font-family: var(--second-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        color: #1d1f26;
      }
    }
  }

  .checkboxes {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .checkbox-item {
      display: flex;
      gap: 8px;
      justify-content: flex-start;

      input {
        width: 24px;
      }

      label {
        color: #1d1f26;
      }
    }
  }

  .slider {
    width: 100%;

    .slider-base {
      background: red;
    } 
    .slider-connects {
      position: relative;

      &::before {
        content: '1';
        position: absolute;
        bottom: 10px;
        left: 0px;
      }
    }
  }

  .vue-tel-input.with-form-form-name-input {
  border-radius: 70px;
  width: 100%;
  height: 70px;
  background: #fff;
  border: none;
  color: $color-white;
  border: 1px solid #ccd1d2;
  align-items: center;

  .vti__dropdown {
    background-color: #fff !important;
  }

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
} 
</style>
