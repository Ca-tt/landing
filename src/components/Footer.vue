<script setup lang="ts">
/* images */
const meHalfFaceBeforeLoaded = "url('/images/curly-hair/curly-hair-before-load.jpg')"
const meHalfFaceLoaded = "/images/curly-hair/curly-hair-loaded.jpg"

/* svg icons */
import PhoneIcon from '@svg/social-icons/PhoneIcon.vue';
import ViberIcon from '@svg/social-icons/ViberIcon.vue';
import TelegramIcon from '@svg/social-icons/TelegramIcon.vue';
import YouTubeIcon from '@svg/social-icons/YouTubeIcon.vue';

const iconSize = 54;

</script>

<template>
  <!-- footer (contacts) -->
  <div id="contacts" class="r t-rec t-rec_pt_90 t-rec_pb_90"
    style="padding-top: 90px; padding-bottom: 90px; background-color: #efefef" data-record-type="578"
    data-bg-color="#efefef">
    <!-- t578-->
    <div class="t578">
      <div class="t-container">
        <div class="t-col t-col_8 t-prefix_2 t-align_center">
          <h3 class="t578__title t-title t-title_xs" field="title">
            Навчання пліч-о-пліч з практиком
          </h3>
          <div class="t578__itemwrapper t-margin_auto">
            <div class="t578__imgwrapper t-margin_auto" style="width: 250px">

              <!-- ? image -->
              <div class="t578__bgimg t-margin_auto t-bgimg" :data-original="meHalfFaceLoaded" bgimgfield="img"
                :style="{ backgroundImage: meHalfFaceLoaded }" itemscope itemtype="http://schema.org/ImageObject">
                <meta itemprop="image" content="/images/compressed-curly-hair.jpg" />
              </div>
            </div>
            <div class="t578__persname t-name t-name_lg mb-2" field="text2">
              Дамір: засновник школи EXPAND<br />Діючий Full Stack JavaScript / Python Developer
            </div>
            <div class="t578__persdescr t-descr t-descr_xxs fs-6" field="descr">
              В IT з 2018 року
            </div>
          </div>
          <div class="t578__text t-text t-text_sm t578__text-bottom-margin" field="text">
            <div style="font-size: 24px" data-customstyle="yes">
              <a href="tel:+380633216796" target="_blank" rel="noreferrer noopener">+38 093
                967 90 96</a>
            </div>
          </div>


          <div class="t-sociallinks">
            <ul role="list" class="t-sociallinks__wrapper m-0 p-0 d-flex column-gap-2 justify-content-center" aria-label="Social media links">

              <!-- ? soclinks -->
              <li class="t-sociallinks__item t-sociallinks__item_phone">
                <a href="tel:+380939679096" target="_blank" rel="nofollow" aria-label="Телефон"
                  :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
                  <PhoneIcon />
                </a>
              </li>
              <li class="t-sociallinks__item t-sociallinks__item_viber">
                <a href="viber://chat?number=%2B380939679096" target="_blank" rel="nofollow" aria-label="viber"
                  :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
                  <ViberIcon />
                </a>
              </li>
              <li class="t-sociallinks__item t-sociallinks__item_telegram">
                <a href="https://t.me/damir_expand" target="_blank" rel="nofollow" aria-label="telegram"
                  :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
                  <TelegramIcon />
                </a>
              </li>
              <li class="t-sociallinks__item t-sociallinks__item_youtube">
                <a href="https://www.youtube.com/@expand_platform" target="_blank" rel="nofollow" aria-label="youtube"
                  :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
                  <YouTubeIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>
