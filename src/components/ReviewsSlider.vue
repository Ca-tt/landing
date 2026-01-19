<script setup lang="ts">
import { reviewsSliderTexts } from '@/texts/school/reviewsSlider';

const props = defineProps<{ texts?: typeof reviewsSliderTexts }>();

</script>

<template>
  <div id="reviews"></div>
  <div id="rec815502760" class="r t-rec t-rec_pt_135 t-rec_pb_135" data-record-type="605">
    <div class="t605 t605__witharrows">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">

          <!-- ? title -->
          <div class="slider-title t-section__title t-title t-title_xs t-align_center t-margin_auto" field="btitle">
            <span v-html="props.texts?.title"></span>
          </div>
        </div>
      </div>

      <div class="t-slds" style="visibility: hidden" aria-roledescription="carousel" aria-label="Slider">
        <div class="t-slds__main t-container">
          <!-- ? arrows -->
          <ul role="list" class="t-slds__arrow_container">
            <!-- ? left arrow -->
            <li class="t-slds__arrow_wrapper t-slds__arrow_wrapper-left" data-slide-direction="left">
              <button type="button" class="t-slds__arrow t-slds__arrow-left t-slds__arrow-withbg"
                aria-controls="carousel_815502760" aria-disabled="false" aria-label="Previous slide"
                style="width: 30px; height: 30px; background-color: rgba(232, 232, 232, 1)">
                <div class="t-slds__arrow_body t-slds__arrow_body-left" style="width: 7px">
                  <svg role="presentation" focusable="false" style="display: block" viewBox="0 0 7.3 13"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1"
                      points="0.5,0.5 6.5,6.5 0.5,12.5" />
                  </svg>
                </div>
              </button>
            </li>
            <!-- ? right arrow -->
            <li class="t-slds__arrow_wrapper t-slds__arrow_wrapper-right" data-slide-direction="right">
              <button type="button" class="t-slds__arrow t-slds__arrow-right t-slds__arrow-withbg"
                aria-controls="carousel_815502760" aria-disabled="false" aria-label="Next slide"
                style="width: 30px; height: 30px; background-color: rgba(232, 232, 232, 1)">
                <div class="t-slds__arrow_body t-slds__arrow_body-right" style="width: 7px">
                  <svg role="presentation" focusable="false" style="display: block" viewBox="0 0 7.3 13"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <polyline fill="none" stroke="#222222" stroke-linejoin="butt" stroke-linecap="butt" stroke-width="1"
                      points="0.5,0.5 6.5,6.5 0.5,12.5" />
                  </svg>
                </div>
              </button>
            </li>
          </ul>

          <!-- ? slides -->
          <div class="t-slds__container">
            <div class="t-slds__items-wrapper t-slds_animated-none" id="carousel_815502760" data-slider-transition="300"
              data-slider-with-cycle="true" data-slider-correct-height="true" data-auto-correct-mobile-width="false"
              aria-roledescription="carousel" aria-live="off">
              <div
                v-for="(slide, idx) in props.texts?.slides"
                :key="idx"
                class="t-slds__item"
                :class="{ 't-slds__item_active': idx === 0 }"
                :data-slide-index="idx + 1"
                role="group"
                aria-roledescription="slide"
                :aria-hidden="idx !== 0"
                :aria-label="`${idx + 1} из 3`"
              >
                <div class="t-width t-width_7 t-margin_auto">
                  <div class="t-slds__wrapper t-align_center">
                    <div class="t605__bgimg t605__img_circle t-bgimg" data-animate-order="1">
                      <img class="slide-image" :src="slide.image" alt="" />
                    </div>
                    <div class="t605__text t-text t-text_md" :field="`li_text__${idx}`" data-animate-order="2" data-animate-delay="0.3">
                      <span v-html="slide.text"></span>
                    </div>
                    <div class="t605__title t-name t-name_lg" :field="`li_title__${idx}`" data-animate-order="3" data-animate-delay="0.3">
                      {{ slide.name }}
                    </div>
                    <div class="t605__descr t-descr t-descr_xxs" :field="`li_descr__${idx}`" data-animate-order="4" data-animate-delay="0.2">
                      {{ slide.descr }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul role="list" class="t-slds__bullet_wrapper">
            <li class="t-slds__bullet t-slds__bullet_active" data-slide-bullet-for="1">
              <button type="button" class="t-slds__bullet_body" aria-label="Go to slide 1" aria-current="true"
                style="width: 6px; height: 6px; background-color: #c7c7c7"></button>
            </li>
            <li class="t-slds__bullet" data-slide-bullet-for="2">
              <button type="button" class="t-slds__bullet_body" aria-label="Go to slide 2"
                style="width: 6px; height: 6px; background-color: #c7c7c7"></button>
            </li>
            <li class="t-slds__bullet" data-slide-bullet-for="3">
              <button type="button" class="t-slds__bullet_body" aria-label="Go to slide 3"
                style="width: 6px; height: 6px; background-color: #c7c7c7"></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

#rec815502760 {
  background-color: #f7f9fc;
  padding: 50px 0;

  @include media.tablet {
    padding: 150px 0;
  }
}

.slider-title {
  margin: 0 0 1rem 0;

  @include media.tablet {
    margin: 0 0 3rem 0;
  }
}


/* image */
.slide-image {
  max-width: 100%;
  border-radius: 50%;
  object-fit: cover;
  height: 150px;
}

/* slide text */
.t605__text {
  margin: 1rem 0;
}
</style>
