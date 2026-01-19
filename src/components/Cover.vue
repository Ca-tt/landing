<script setup lang="ts">
import ArrowDownIcon from '@svg/ArrowDownIcon.vue';
import { coverTexts } from '@/texts/school/cover';
import {ref} from "vue";

const props = defineProps<{ texts?: typeof coverTexts }>();

let coverFilter = ref<HTMLElement|null>(null);

function setCoverHeight() {
  if (window.innerWidth <= 768) {
    coverFilter.value?.style.setProperty('--mobile-cover-height', `90vh !important`);
  } else {
    coverFilter.value?.style.setProperty('--desktop-cover-height', `100vh !important`);
  }
}

setCoverHeight();

</script>

<template>
  <div id="rec622692141" class="r t-rec cover-wrapper" style="" data-animationappear="off" data-record-type="244">

    <div class="t-cover" id="recorddiv622692141" bgimgfield="img">
      <div class="t-cover__carrier loaded" id="coverCarry622692141" data-content-cover-id="622692141"
        data-content-cover-bg="/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg"
        data-display-changed="true" data-content-cover-parallax="dynamic"
        style="background-attachment: scroll; background-image: url('/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg'); background-attachment: scroll"
        itemscope itemtype="http://schema.org/ImageObject">
        <meta itemprop="image" content="/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg" />
      </div>
      <div class="t-cover__filter" ref="coverFilter"></div>
      <div class="t-container">

        <div class="t-col t t-col_12">
          <div class="t-cover__wrapper d-flex justify-content-center align-items-center">
            <div class="t216">
              <div data-hook-content="covercontent">
                <!-- ? logo -->
                <div class="container w-auto">
                  <section class="row justify-content-center">
                    <div class="t216__blocklogo p-0">
                      <a class="t216__logo-link" href="#features">
                        <img src="/images/logo/expand.png" data-original="/images/logo/expand.png"
                          class="t216__logo logo t-img" imgfield="img2" data-tu-max-width="1000" data-tu-max-height="1000"
                          data-hook-clogo="coverlogo" alt="" />
                      </a>
                    </div>
                  </section>
                </div>
                <div class="t216__wrapper">
                  <!-- ? texts -->
                  <h1 class="t216__title t-title t-title_xl" field="title">
                    {{ props.texts?.title }}<br /> <span class="title-highlighted">{{ props.texts?.title_highlighted }}</span>
                  </h1>
                  <h3 class="subtitle fw-light text-white fs-2">{{ props.texts?.subtitle }}</h3>
                  <span class="space"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ? arrow -->
      <div class="t-cover__arrow">
        <div class="t-cover__arrow-wrapper t-cover__arrow-wrapper_animated">
          <div class="t-cover__arrow_mobile">
            <a href="#features" class="arrow-link">
              <ArrowDownIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.cover-wrapper {
  --mobile-cover-height: 90vh;
  --desktop-cover-height: 100vh;
}

.logo {
  --logo-size-mobile: 70px;
  --logo-size-desktop: 150px;
}

.t216__title {
  --title-font-size-mobile: 2.5rem;
  --title-font-size-desktop: 4.5rem;
}


.t-cover {
  height: var(--mobile-cover-height);

  @include media.tablet {
    height: var(--desktop-cover-height);
  }
}

.t216__wrapper {
  padding: 0 0 2rem 0;
}

.logo {
  max-width: var(--logo-size-mobile);
  margin: 0 0 2rem 0;

  @include media.tablet {
    max-width: var(--logo-size-desktop);
    margin: 0;
  }
}

.t-cover__carrier {
  height: var(--mobile-cover-height);

  @include media.tablet {
    height: var(--desktop-cover-height);
  }
}

.t-container {
  @include media.desktop {
    max-width: 50%;
  }
}

.t-cover__wrapper {
  display: block;
  word-break: normal;
  width: auto;
  height: var(--mobile-cover-height);

  @include media.tablet {
    height: var(--desktop-cover-height);
  }
}

.t-cover__filter {
  height: var(--mobile-cover-height);
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));

  @include media.desktop {
    background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7));
    height: var(--desktop-cover-height);
  }
}

.brand-name {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #bc2626;
  font-weight: 600;

  @include media.tablet {
    font-size: 2.5rem;
  }
}

.t216__title {
  font-size: var(--title-font-size-mobile);
  text-align: center;
  word-break: auto-phrase;
  overflow-wrap: break-word;
  margin: 0 0 2rem 0;
  padding: 0;

  @include media.tablet {
    margin: 0 0 3rem 0;
    font-size: var(--title-font-size-desktop);
    font-weight: 600;
  }
}


.subtitle {
  font-size: 1.75rem;

  @include media.tablet {
    margin: 1.5rem 0 0 0;
    font-size: 2rem;
  }
}

.t-col {
  float: none;
}

/**
 * ?  arrow
 */
.arrow-link {
  display: inline-block;
  max-width: 40px;
}
</style>
