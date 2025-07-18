<script setup lang="ts">

const plans = {
  title: "Ціни на заняття",
  subtitle: "",
}

const firstContact = {
  text: "Записатись на урок",
  link: "tel:+380939679096",
}

const groupPlans = [
  {
    oldPrice: '3 200 грн',
    title: '«Стандарт х4»',
    subtitle: '',
    price: '1 800 грн',
    features: [
      '4 заняття на місяць',
      '90-120 хвилин уроку',
      '5 мов програмування на вибір',
      'Персональні заняття',
      'Міні-група по 2-3 студента',
      'Особистий план навчання «під ключ»',
    ],
    lid: '1729970774479',
  },
  // {
  //   oldPrice: '8 200 грн',
  //   title: '«Преміум х8»',
  //   subtitle: 'Один урок в подарунок!',
  //   price: '7 100 грн',
  //   features: [
  //     '8 занять на місяць',
  //     '1 заняття за 0 гривень!',
  //     'Пришвидшений прогресс навчання',
  //     '5 мов програмування',
  //     'Персональний план навчання',
  //     'Фіксація ціни на початку навчання',
  //   ],
  //   lid: '1701942404473',
  //   featured: true,
  // },
  // {
  //   oldPrice: '12 700 грн',
  //   title: '«Преміум х12»',
  //   subtitle: 'Два урока в подарунок!',
  //   price: '10 200 грн',
  //   features: [
  //     '12 занятть на місяць',
  //     '2 заняття за 0 грн!',
  //     'За місяць проходимо програму двух місяців',
  //     '5 мов програмування',
  //     'Персональний план навчання та розвитку',
  //   ],
  //   lid: '1659515974295',
  // },
]
</script>

<template>
  <div id="rec622703940" class="r t-rec" style="" data-record-type="215">
    <a name="plans" style="font-size: 0"></a>
  </div>
  <div id="rec622692150" class="r t-rec t-rec_pb_150" style="padding-bottom: 150px" data-animationappear="off"
    data-record-type="1069">
    <div class="t1069" data-display-changed="true">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto mb-3" field="btitle">
            {{ plans.title }}
          </div>
          <div class="t-section__descr t-descr t-descr_xl t-align_center t-margin_auto mb-5" field="bdescr"
            v-html="plans.subtitle">

          </div>
        </div>
      </div>


      <div class="t-container t-card__container t1069__withfeatured">
        <div class="t1069__row justify-content-center">
          <div v-for="(plan, idx) in groupPlans" :key="plan.lid"
            class="t1069__col t-card__col t-col t-col_4 t-align_center" :class="{ 't1069__featured': plan.featured }">
            <div class="t1069__content" style="border: 1px solid #e0e6ed">
              <div class="t-card__title t-name t-name_lg">
                <div style="font-size: 24px" data-customstyle="yes">
                  <span style="text-decoration: line-through">{{ plan.oldPrice }}</span>
                </div>
              </div>
              <div class="t-card__uptitle t-descr t-descr_xxs">
                {{ plan.title }}<br />{{ plan.subtitle }}
              </div>
              <div class="t1069__price t-title t-title_xs">
                {{ plan.price }}
              </div>
              <div class="t-card__descr t-descr t-descr_xs">
                <ul>
                  <li v-for="(feature, i) in plan.features" :key="i" data-list="bullet">
                    <span
                      v-if="feature.startsWith('Преміальна') || feature.match(/^\d+|^За місяць|^1 заняття|^8 занять|^12 занятть|^2 заняття|^1 заняття|^Пришвидшений|^За місяць/)"><strong>{{
                        feature }}</strong></span>
                    <span v-else>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <a :href="firstContact.link" class="t-card__link">
                <div class="t-card__btn t-btn t-btn_sm" style="
                        color: #ffffff;
                        background-color: #13ce66;
                        border-radius: 30px;
                        -moz-border-radius: 30px;
                        -webkit-border-radius: 30px;
                      " :data-buttonfieldset="'li_button'" :data-lid="plan.lid">
                  <span class="t1069__btn-title">{{ firstContact.text }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped></style>
