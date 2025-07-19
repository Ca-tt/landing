<script setup lang="ts">


const texts = {
  title: "Заняття<br />на яких вкладають душу в кожного студента",
  subtitle: "Але я спробую вас переконати",
}

const cards = [
  {
    title: "Міні групи по 2-3 студенти",
    descr: "Ніяких наборів по 10 чоловік<br />Приділяю увагу кожному учню",
    img: "/images/tild3261-3336-4030-b665-626134653437__star.svg",
  },
  {
    title: "Заняття - до 120 хвилин",
    descr: "На 30-60 хвилин більше<br />ніж на типових курсах",
    img: "/images/tild3537-3663-4534-b566-306430626436__clock.svg",
  },
  {
    title: "Підтримка посеред тижня",
    descr: "Виникло питання поза уроком?<br />Я не залишу вас без допомоги",
    img: "/images/tild3365-3539-4635-b131-663633666338__message.svg",
  },
  {
    title: "Навчання, як в університеті",
    descr: "Середній термін навчання:<br />3-4 роки",
    img: "/images/tild6364-6131-4830-a238-363435336435__hourglass.svg",
  },
  {
    title: "5 мов програмування",
    descr: "Всі популярні мови програмування: <br />Python, JavaScript, C++, C#, PHP",
    img: "/images/tild6561-3535-4737-a362-323037613431__projects.svg",
  },
  {
    title: "Величезна енциклопедія знань",
    descr: "Всі матеріали онлайн:<br />задачі, відео, проекти",
    img: "/images/tild3930-6263-4866-a566-383466646537__lk.svg",
  },
];

</script>

<template>

  <div id="features" class="r t-rec" style="" data-record-type="215">
    <a name="features" style="font-size: 0"></a>
  </div>
  <div id="rec622692143" class="r t-rec t-rec_pb_150" style="padding-top: 150px; padding-bottom: 150px"
    data-record-type="490">
    <!-- t490 -->
    <div class="t490">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center" field="btitle" v-html="texts.title"></div>
        </div>
      </div>

      <div class="t490__container t-card__container t-container">
        <div v-for="(card, idx) in cards" :key="idx">
          <div class="t-card__col t-card__col_withoutbtn t490__col t-col t-col_6 t-align_center t-item t-animate"
            data-animate-style="fadeindown" data-animate-chain="yes">
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

<style lang="scss" scoped></style>
