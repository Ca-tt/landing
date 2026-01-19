<script setup lang="ts">
import PhoneIcon from '@svg/social-icons/PhoneIcon.vue';
import ViberIcon from '@svg/social-icons/ViberIcon.vue';
import TelegramIcon from '@svg/social-icons/TelegramIcon.vue';
import YouTubeIcon from '@svg/social-icons/YouTubeIcon.vue';

import { footerTexts } from '@/texts/school/footer';

const props = defineProps<{ texts?: typeof footerTexts }>();

const iconComponents = {
  PhoneIcon,
  ViberIcon,
  TelegramIcon,
  YouTubeIcon,
};

const iconSize = 54;


</script>

<template>
  <div id="contacts" class="footer r t-rec t-rec_pt_90 t-rec_pb_90"
    style="padding-top: 90px; padding-bottom: 90px; background-color: #efefef" data-record-type="578"
    data-bg-color="#efefef">
    <div class="t578">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col col-8 text-center">
            <h3 class="t578__title t-title t-title_xs" field="title" v-html="props.texts?.title">
            </h3>
            <div class="t578__itemwrapper t-margin_auto">
              <div class="t578__imgwrapper t-margin_auto" style="width: 250px">
                <!-- ? image -->
                <div class="t578__bgimg t-margin_auto t-bgimg" itemscope itemtype="http://schema.org/ImageObject">
                  <meta itemprop="image" content="/images/compressed-curly-hair.jpg" />
                </div>
              </div>
              <div class="t578__persname t-name t-name_lg mb-2" field="text2">
                <ul class="bullet">
                  <li class="t578__persdescr t-descr t-descr_xxs fs-6" v-for="(item, idx) in props.texts?.achievements"
                    :key="idx" v-html="item.label"></li>
                </ul>
              </div>
            </div>
            <div class="phone-number-wrapper mb-4 t578__text t-text t-text_sm t578__text-bottom-margin" field="text">
              <div data-customstyle="yes">
                <a class="phone-number" :href="props.texts?.phoneHref" target="_blank" rel="noreferrer noopener">{{ props.texts?.phone
                }}</a>
              </div>
            </div>
            <div class="t-sociallinks">
              <ul role="list" class="t-sociallinks__wrapper m-0 p-0 d-flex column-gap-2 justify-content-center"
                aria-label="Social media links">
                <li v-for="(item, idx) in props.texts?.social" :key="idx"
                  :class="'t-sociallinks__item t-sociallinks__item_' + item.icon.toLowerCase().replace('icon', '')">
                  <a :href="item.href" target="_blank" rel="nofollow" :aria-label="item.label"
                    :style="{ width: iconSize + 'px', height: iconSize + 'px' }">
                    <component :is="iconComponents[item.icon]" />
                  </a>
                </li>
              </ul>
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
  margin: 0 0 1rem 0 !important;
  text-align: left;
  font-size: 1.1rem;

  @include media.tablet {
    font-size: 1.2rem;
    margin: 0 0 1rem 2rem !important;
  }
}

.t-title.t-title_xs {
  margin: 0 0 2rem 0;
}

.t-name.t-name_lg {
  font-weight: normal;
  text-align: left;
  max-width: 100%;

  @include media.tablet {
    margin: 0 auto;
    max-width: 50%;
  }
}

.t-descr.t-descr_xxs {
  font-size: 1.15rem !important;
}

.footer {
  --footer-image: url("/images/curly-hair/curly-hair-loaded.jpg");
}

.phone-number {
  font-size: 1.5rem;
  color: rgb(45, 145, 232);
  font-weight: 600;
}

.t-sociallinks {
  margin-top: 0;
}

.t578__bgimg {
  background-image: var(--footer-image);
  margin: 0 0 3rem 0;
}
</style>
