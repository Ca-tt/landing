<script setup lang="ts">
import { groupPlansTexts } from '@/texts/school/groupPlans';

const props = defineProps<{ texts?: typeof groupPlansTexts }>();

</script>

<template>
  <div id="group-plans" class="r t-rec" style="" data-record-type="215">
    <a name="plans" style="font-size: 0"></a>
  </div>
  <div id="rec622692150" class="r t-rec t-rec_pb_150" style="padding-bottom: 150px" data-animationappear="off"
    data-record-type="1069">
    <div class="t1069" data-display-changed="true">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto mb-3" field="btitle">
            {{ props.texts?.plans.title }}
          </div>
          <div class="t-section__descr t-descr t-descr_xl t-align_center t-margin_auto mb-5" field="bdescr"
            v-html="props.texts?.plans.subtitle">

          </div>
        </div>
      </div>
      <div class="t-container t-card__container t1069__withfeatured">
        <div class="row row-gap-5">
          <div v-for="(plan, idx) in props.texts?.groupPlans" :key="plan.id" class="col col-4 t-align_center"
            :class="{ 't1069__featured': plan.isHighlighted }">
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
                <ul class="bullet">
                  <li class="text-start" v-for="(feature, i) in plan.features" :key="i" data-list="bullet">
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <a :href="props.texts?.firstContact.link" class="t-card__link">
                <div class="t-card__btn t-btn t-btn_sm" style="
                        color: #ffffff;
                        background-color: #13ce66;
                        border-radius: 30px;
                        -moz-border-radius: 30px;
                        -webkit-border-radius: 30px;
                      " :data-buttonfieldset="'li_button'" :data-lid="plan.id">
                  <span class="t1069__btn-title">{{ plan.buttonText }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.bullet {
  list-style-type: disc !important;
  margin: 0 0 1rem 2rem !important;
  text-align: left;
  font-size: 1.1rem;

  @include media.tablet {
    font-size: 1.2rem;
  }
}

.t-card__btn {
  margin: 1rem 0 0 0 !important;
}

// .t1069__withfeatured .t1069__featured {
//   margin: 0;
// }</style>
