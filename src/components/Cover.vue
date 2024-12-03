<script setup lang="ts">
/* svg icons */
import ArrowDownIcon from '@svg/ArrowDownIcon.vue';
</script>

<template>
  <div id="rec622692141" class="r t-rec cover-wrapper" style="" data-animationappear="off" data-record-type="244">
    <div class="t-cover" id="recorddiv622692141" bgimgfield="img">
      <!-- ? logo -->
      <div class="t-cover__carrier loaded" id="coverCarry622692141" data-content-cover-id="622692141"
        data-content-cover-bg="/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg"
        data-display-changed="true" data-content-cover-parallax="dynamic"
        style="background-attachment: scroll; background-image: url('/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg'); background-attachment: scroll"
        itemscope itemtype="http://schema.org/ImageObject">
        <meta itemprop="image" content="/images/tild3836-3031-4165-b739-393463636135__img_20220906_230151_.jpg" />
      </div>
      <div class="t-cover__filter"></div>
      <div class="t-container filter-container">
        <div class="t-col t-col_12">
          <div class="t-cover__wrapper t-valign_top">
            <div class="t216 t-align_center">
              <div data-hook-content="covercontent">
                <div class="t216__wrapper">
                  <div class="t216__blocklogo">
                    <a class="t216__logo-link" href="#features" target="">
                      <img src="/images/tild3537-6139-4138-b466-373438313637__expand-sqr.png"
                        data-original="/images/tild3537-6139-4138-b466-373438313637__expand-sqr.png"
                        class="t216__logo t-img" imgfield="img2" data-tu-max-width="800" data-tu-max-height="800"
                        style="max-width: 150px; width: 100%; height: auto" data-hook-clogo="coverlogo" alt="" />
                    </a>
                  </div>
                  <h1 class="t216__title t-title t-title_xl" field="title">
                    Преміальні курси програмування
                  </h1>
                  <h3 class="subtitle fw-light">Європейський рівень викладання</h3>
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
      <!-- arrow -->
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";


/**
 * ! Cover section
 */

.cover-wrapper {
  --mobile-cover-height: 110vh;
  --desktop-cover-height: 100vh;
}

.t-cover {
  height: var(--mobile-cover-height);

  @include media.tablet {
    height: var(--desktop-cover-height);
  }
}

.t-cover__carrier {
  height: var(--mobile-cover-height);

  @include media.tablet {
    height: var(--desktop-cover-height);
  }
}

.filter-container {
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


/**
* ? logo
*/
.t216__blocklogo {
  padding: 2.5rem 0 1.5rem 0;
}

.t216__title {
  font-size: 2.5rem;
  text-align: center;
  word-break: auto-phrase;
  overflow-wrap: break-word;
  margin: 0 0 1rem 0;
  padding: 0;

  @include media.tablet {
    margin: 0;
    font-size: 4rem;
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
