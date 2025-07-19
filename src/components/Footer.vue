<script setup lang="ts">
import PhoneIcon from '@svg/social-icons/PhoneIcon.vue';
import ViberIcon from '@svg/social-icons/ViberIcon.vue';
import TelegramIcon from '@svg/social-icons/TelegramIcon.vue';
import YouTubeIcon from '@svg/social-icons/YouTubeIcon.vue';

const texts = {
  title: 'Практик, не теоретик',
  name: 'Дамір: засновник школи EXPAND<br />Діючий Full Stack JavaScript / Python / PHP Developer',
  descr: 'В IT з 2018 року',
  phone: '+38 093 967 90 96',
  phoneHref: 'tel:+380939679096',
  social: [
    {
      href: 'tel:+380939679096',
      label: 'Телефон',
      icon: 'PhoneIcon',
    },
    {
      href: 'viber://chat?number=%2B380939679096',
      label: 'viber',
      icon: 'ViberIcon',
    },
    {
      href: 'https://t.me/damir_teacher',
      label: 'telegram',
      icon: 'TelegramIcon',
    },
    {
      href: 'https://www.youtube.com/@expand_platform',
      label: 'youtube',
      icon: 'YouTubeIcon',
    },
  ],
}

const iconComponents = {
  PhoneIcon,
  ViberIcon,
  TelegramIcon,
  YouTubeIcon,
};

const iconSize = 54;


</script>

<template>
  <!-- footer (contacts) -->
  <div id="contacts" class="footer r t-rec t-rec_pt_90 t-rec_pb_90"
    style="padding-top: 90px; padding-bottom: 90px; background-color: #efefef" data-record-type="578"
    data-bg-color="#efefef">
    <!-- t578-->
    <div class="t578">
      <div class="t-container">
        <div class="t-col t-col_8 t-prefix_2 t-align_center">
          <h3 class="t578__title t-title t-title_xs" field="title">
            {{ texts.title }}
          </h3>
          <div class="t578__itemwrapper t-margin_auto">
            <div class="t578__imgwrapper t-margin_auto" style="width: 250px">

              <!-- ? image -->
              <div class="t578__bgimg t-margin_auto t-bgimg" itemscope itemtype="http://schema.org/ImageObject">
                <meta itemprop="image" content="/images/compressed-curly-hair.jpg" />
              </div>
            </div>
            <div class="t578__persname t-name t-name_lg mb-2" field="text2">
              <span v-html="texts.name"></span>
            </div>
            <div class="t578__persdescr t-descr t-descr_xxs fs-6" field="descr">
              {{ texts.descr }}
            </div>
          </div>
          <div class="t578__text t-text t-text_sm t578__text-bottom-margin" field="text">
            <div style="font-size: 24px" data-customstyle="yes">
              <a :href="texts.phoneHref" target="_blank" rel="noreferrer noopener">{{ texts.phone }}</a>
            </div>
          </div>


          <div class="t-sociallinks">
            <ul role="list" class="t-sociallinks__wrapper m-0 p-0 d-flex column-gap-2 justify-content-center"
              aria-label="Social media links">
              <li v-for="(item, idx) in texts.social" :key="idx"
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
</template>

<style lang="scss" scoped>
.footer {
  --footer-image: url("/images/curly-hair/curly-hair-loaded.jpg");
}

.t578__bgimg {
  background-image: var(--footer-image);
}
</style>
