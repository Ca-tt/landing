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
    oldPrice: 'Вводне заняття',
    title: 'Для нових студентів',
    price: 'Безкоштовно',
    features: [
      'Особисте знайомство',
      'Визначаємо ваш поточний рівень',
      'Консультація 30-45 хвилин',
      'Фіксуємо ціну на перші півроку',
    ],
    id: '2231',
  },
  {
    oldPrice: 'Програмування / English',
    title: '«Стандарт х4 заняття»',
    price: '450 грн / урок',
    featured: true,
    features: [
      '4 заняття на місяць',
      '90-120 хвилин уроку',
      '5 мов програмування на вибір',
      '75% уроку - розмовляємо англійською',
      'Міні-група із 2-3 студентів',
      'Особистий план навчання «під ключ»',
    ],
    id: '1123',
  },
  {
    oldPrice: 'Персональні уроки',
    title: '«Преміум х4 заняття»',
    price: '800 грн / урок',
    features: [
      '4 заняття на місяць',
      '60-90 хвилин уроку',
      'Займаємось удвох з викладачем',
      'Особистий план навчання «під ключ»',
    ],
    id: '3234',
  },
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
          <div v-for="(plan, idx) in groupPlans" :key="plan.id"
            class="t1069__col t-card__col t-col t-col_4 t-align_center" :class="{ 't1069__featured': plan.featured }">
            <div class="t1069__content" style="border: 1px solid #e0e6ed">
              <div class="t-card__title t-name t-name_lg">
                <div style="font-size: 24px" data-customstyle="yes">
                  <span>{{ plan.oldPrice }}</span>
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
                      " :data-buttonfieldset="'li_button'" :data-lid="plan.id">
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
