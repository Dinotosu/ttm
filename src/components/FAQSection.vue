<template>
  <div class="faq-section">
    <h2 class="faq-section-title">
      FAQ
    </h2>

    <div class="faq-section-elements">
      <CustomFAQ 
        :answers="answers"
        color="blue"
        :columns="6"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomFAQ from '../ui/CustomFAQ.vue';

const answers = [
  {
    title: 'Указанный в договоре срок разработки — точный?',
    description: 'Срок разработки проекта зависит от скорости утверждения вами этапов работ и предоставления материалов. Указанные в договоре сроки — время, которое мы затратим на реализацию этапов в идеальных условиях.',
    status: false,
    id: 1,
  },
    {
    title: 'У вас есть опыт в моей нише?',
    description: 'У меня есть разнообразная экспертиза в разных направлениях: производство, сервис, услуги, образование. Для реализации задач будет достаточно собрать информацию во время интервью и провести исследование по конкурентам в рынке. Это позволит нам предложить рабочие вариации достижения целей на этапе проектирования.',
    status: false,
    id: 2,
  },
    {
    title: 'Как я могу контролировать процесс разработки сайта?',
    description: 'Да, в случаи разработки сайта на Webflow и Tilda. Некоторые блоки на сайте мы можем сделать стандартными — функционал в случае с Тильдой очень удобен для самостоятельного редактирования. Вы легко сможете вносить изменения. Если нужный вам блок выполнен нестандартно, мы сможем помочь с редактированием. Вы всегда можете обратиться за доработками ко мне',
    status: false,
    id: 3,
  },
    {
    title: 'А если мне не понравится дизайн, когда сайт уже сделан?',
    description: 'Мы не будем спекулировать на ваших знаниях или их отсутствии. Найдем для вас доступные слова и формулировки, чтобы объяснить процессы.',
    status: false,
    id: 4,
  },
    {
    title: 'Что входит в бесплатную итерацию правок?',
    description: 'Мы сами выстроили последовательность работы над проектом таким образом, чтобы вы всегда знали на каком этапе мы находимся и что требуется для дальнейшего прогресса. Пишем о статусе, запрашиваем контент и держим в курсе.',
    status: false,
    id: 5,
  },
    {
    title: 'Как происходит оплата? ',
    description: 'Совокупный успешный опыт и реализованные проекты влияют на стоимость услуг. Мы знаем как сделать так, чтобы ваш сайт запомнили благодаря визуальному стилю, поняли ценности вашего продукта за счёт структуры и совершили целевое действие при помощи спроектированных визуальных приемов. Ваш сайт красив, понятен и удобен как для вас так и для ваших посетителей',
    status: false,
    id: 6,
  },
    {
    title: 'Смогу ли я сам редактировать свой будущий сайт?',
    description: 'Процесс разработки устроен так, что мы не приступаем к работам пока не согласовали с вами предыдущий этап.Таким образом, мы сводим к минимуму всю отрицательную обратную связь по проекту.',
    status: false,
    id: 7,
  },
    {
    title: 'Что если я не разбираюсь в веб-дизайне?',
    description: 'На этапе дизайн-концепций — это заказ еще одной концепции в новом стиле. На этапе дизайна это 1 раунд правок по макету. Правки сверх этого объема оплачиваются дополнительно на основании почасового тарифа.',
    status: false,
    id: 8,
  },
    {
    title: 'А что если ни одна дизай-концепция не понравится?',
    description: 'Или если не понравится реализация дизайн-концепции в дизайн-макетах. Мы готовы предоставить весь доступный ресурс по бесплатным итерациям и почасовым доработкам, чтобы достигнуть приемлемого для вас варианта дизайна. В то же время следует учесть, что мы располагаем не только представлением о том, что сегодня актуально в вебе, но и имеем большой опыт в коммуникации. В худшем случае мы передадим вам весь прогресс на момент возникновения непреодолимых препятствий.',
    status: false,
    id: 9,
  },
    {
    title: 'А что если ни одна дизайн-концепция не понравится?',
    description: 'Как исполнитель мы подписываем договор от имени самозанятого гражданина, а порядок оплаты описываем в приложении к договору. Как правило это три платежа кратно этапам работ. Согласовывая этап и утверждая его, вы оплачиваете следующий. Сама оплата производится любым удобным способом на счет в банке, даже переводом по номеру.',
    status: false,
    id: 10,
  },
    {
    title: ' На чем основана стоимость работ?',
    description: 'В рамках разработки сайта мы проводим настройки базовой поисковой оптимизации. Если вам дополнительно требуется создание рекламной кампании — мы подберем специалиста и подключим его к проекту.',
    status: false,
    id: 11,
  },
]
</script>

<style scoped lang="scss">

.faq-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 110px auto;
}

.faq-section-title {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 80px;
  line-height: 110%;
  letter-spacing: -0.04em;
  text-align: center;
  color: #fff;
  margin-bottom: 64px;
}

@media (max-width: 768px) {
  .faq-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 80px 20px 176px 20px;
    margin: 0;
  }

  .faq-section-title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 80px;
    line-height: 110%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #fff;
    margin-bottom: 32px;
  }
}
</style>