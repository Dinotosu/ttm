<template>
  <footer class="footer">
    <div class="footer-top">
      <h2 class="footer-top__title">
        Контакты
      </h2>

      <div class="footer-top-links">
        <div v-for="(link, index) of links" :key="index" class="footer-top-links__item">
          <a :href="link.link" target="_blank" class="footer-top-links__item-title">
            {{ link.title }}
          </a>

          <CustomLink v-if="!isMobile()" :to="link.link"  color="grey-link" background="fill"/>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <a href="#" class="footer-bottom-left__logo">
          <img src="../../public/logo-black.svg" alt="">
        </a>

        <span class="footer-bottom-left__copyright">© totake tomake, 2024</span>
      </div>

      <div class="footer-bottom-center">
        <div class="footer-bottom-center-top">
          <span>
            Самозанятый Камеш Евгений Андреевич <br/>
            Свидетельство о государственной регистрации выдано Червенским <br/>
            горисполкомом 10.02.2024 с регистрационным номером 193702659 <br/>
            УНП: 193702659 <br/>
            BY71ALFA30122D75340010270000 в BYN <br/>
            в ЗАО «Альфа-Банк»,<br/>
            БИК: ALFABY2X<br/>
          </span>

          <p>Сайт внесен в торговый реестр РБ от 30.02.2024 <br/> Регистрационный номер 1937026</p>
        </div>

        <div class="footer-bottom-center-bottom">
          <a class="underline" href="mailto:totaketomake@gmail.com">totaketomake@gmail.com</a>

          <a class="underline" href="tel:+375255456228">+375 (25) 545-62-28</a>
        </div>
      </div>

      <div class="footer-bottom-right">
        <CustomButton color="blue-link" background="fill" text="Обсудить проект" class="button" @click="emit('talkAboutProject')"/>

        <CustomButton color="black-link" background="transparent" text="Памятка заказчику" class="button"/>

        <a href="#" class="underline">вернуться наверх</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import CustomLink from "../ui/CustomLink.vue";
import CustomButton from "../ui/CustomButton.vue";
import isMobile from "../helpers/isMobile";
import { defineEmits } from "vue";

const emit = defineEmits<{
  (e: 'talkAboutProject'): void
}>()

const links = [
  {
    title: 'telegram',
    link: 'https://t.me/totaketomake'
  },
  {
    title: 'instagram',
    link: 'https://www.instagram.com/totaketomake/'
  },
  {
    title: 'vk',
    link: 'https://vk.com/totaketomake'
  },
  {
    title: 'viber',
    link: 'https://msng.link/o?375255456228=vi'
  },
]
</script>

<style scoped lang="scss">
@import "../assets/styles/colors.scss";

.footer {
  width: 100%;
  display: flex;
  background: $color-white;
  border-radius: 64px;
  padding: 86px 64px;
  flex-direction: column;
  color: $color-black;
  position: relative;
}

.footer-top {
  display: flex;
  width: 100%;
}

.footer-top__title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 76px;
  line-height: 102%;
  letter-spacing: -0.04em;
  color: #1d1f26;
  width: 50%;
  text-align: start;
}

.footer-top-links {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-top-links__item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 42px;
  border-bottom: 1px solid rgba(40, 40, 41, 0.42);
}

.footer-top-links__item-title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 76px;
  line-height: 128%;
  letter-spacing: -0.04em;
  color: #151515;
}

.footer-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 290px;
  margin-top: 110px;
}

.footer-bottom-left {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.footer-bottom-center {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
}

.footer-bottom-center-top p {
  margin: 21px 0 64px 0;
}

.footer-bottom-center-bottom {
  width: 350px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #151515;
  }
}

.footer-bottom-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .button:nth-of-type(2) {
    margin-top: 16px;
  }

  .underline {
    margin-top: auto;
    color: #151515;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-align: right;
  }
}

.underline {
  text-decoration: underline !important;
}

@media (max-width: 768px) {
  .footer {
    padding: 32px 20px;
    flex-direction: column;
  }

  .footer-top {
    display: flex;
    width: 100%;
  }

  .footer-top__title {
    font-size: 48px;
    color: $color-white;
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }

  .footer-top-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }

  .footer-top-links__item {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;

    &:not(::last-of-type) {
      border-bottom: 1px solid rgba(40, 40, 41, 0.42);
    }
  }

  .footer-top-links__item-title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 64px;
    line-height: 152%;
    letter-spacing: -0.04em;
    color: #151515;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: fit-content;
    margin-top: 64px;
  }

  .footer-bottom-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    order: 3;
    gap: 32px;
    margin-top: 64px;

    span {
      width: 100%;
      text-align: center;
    }
  }

  .footer-bottom-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;

    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    order: 2;
  }

  .footer-bottom-center-top p {
    margin: 16px 0 0 0;
  }

  .footer-bottom-center-bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;

    a:last-of-type {
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 36px;
      line-height: 269%;
      letter-spacing: -0.04em;
      text-align: center;
      text-decoration: none !important;
    }

    a {
      text-decoration: none;
      color: #151515;
    }
  }

  .footer-bottom-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    order: 1;

    .button {
      width: 100%;
    }

    .underline {
      display: none;
      margin-top: auto;
      color: #151515;

      font-family: var(--font-family);
      font-weight: 400;
      font-size: 14px;
      text-decoration: underline;
      text-decoration-skip-ink: none;
      text-align: right;
    }
  }

  .underline {
    text-decoration: underline !important;
  }
}
</style>