<script setup lang="ts">


const texts = {
  title: "Заняття,<br /> на яких 2 години пролітають за 5 хвилини",
  subtitle: "Але я спробую вас переконати",
}

const cards = [
  {
    title: "Міні-групи по 2 студенти",
    descr: "Ніяких груп по 10 чоловік.<br />Приділяю увагу кожному студенту",
    img: "/images/svg/star.svg",
  },
  {
    title: "6 мов програмування",
    descr: "Всі популярні мови програмування: <br />Python, JavaScript, PHP, Java, C++, C#",
    img: "/images/svg/settings.svg",
  },
  {
    title: "Методика «трьох тренувань»",
    descr: "Унікальна методика навчання,<br />взята зі спортивних змагань",
    img: "/images/svg/phone.svg",
  },
  {
    title: "Індивідуальні заняття",
    descr: "Заняття 1-на-1 з ментором.<br />Максимальний результат за короткий час",
    img: "/images/svg/kinder.svg",
  },
  {
    title: "Заняття - по 2 години",
    descr: "На 40-60 хвилин більше фокусу,<br />ніж на звичайних курсах",
    img: "/images/svg/time-clock.svg",
  },
  {
    title: "96% задоволених студентів",
    descr: "Бо завжди на зв'язку, допомагаємо <br />посеред тижня та ставимось до вас як до друга",
    img: "/images/svg/messages.svg",
  },
];

</script>

<template>

  <div id="features" class="r t-rec" style="" data-record-type="215">
    <a name="features" style="font-size: 0"></a>
  </div>
  <div id="rec622692143" class="r t-rec t-rec_pb_150" data-record-type="490">
    <!-- t490 -->
    <div class="t490">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center" field="btitle" v-html="texts.title"></div>
        </div>
      </div>

      <div class="t490__container t-card__container t-container">
        <div v-for="(card, idx) in cards" :key="idx">
          <!-- <div class="t-card__col t-card__col_withoutbtn t490__col t-col t-col_6 t-align_center t-item t-animate"
            data-animate-style="fadeindown" data-animate-chain="yes"> -->
          <div class="t-card__col t-card__col_withoutbtn t490__col t-col t-col_6 t-align_center t-item">
            <img class="t490__img t-img" :src="card.img" alt="" />
            <div class="t490__wrappercenter">
              <div class="t-card__title t-heading t-heading_md">
                {{ card.title }}
              </div>
              <div class="t-card__descr t-descr t-descr_xs" v-html="card.descr"></div>
            </div>
          </div>
          <div v-if="(idx + 1) % 2 === 0 && idx !== cards.length - 1" class="t-clear t490__separator" style=""></div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.t-rec.t-rec_pb_150 {
  padding: 50px 0;

  @include media.tablet {
    padding: 150px 0;
  }
}
</style>
