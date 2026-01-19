<script setup lang="ts">
import { compareTableTexts } from '@/texts/school/compareTable';

const props = defineProps<{ texts?: typeof compareTableTexts }>();
</script>

<template>
  <div id="compare" class="r t-rec t-rec_pb_150" data-animationappear="off" data-record-type="613"
    data-bg-color="#eeeeee">
    <div class="t613">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto mb-3" field="btitle">
            {{ props.texts?.title }}
          </div>
          <div class="t-section__descr t-descr t-descr_xl t-align_center t-margin_auto mb-5" field="bdescr">
            <span v-html="props.texts?.descr"></span>
          </div>
        </div>
      </div>

      <div class="t613__container t-container row justify-content-center">
        <div class="t613__content t-col t-col_10" data-auto-correct-mobile-width="false">
          <div class="t613__mobile" data-auto-correct-mobile-width="false">
            <div class="t613__wrapper" data-auto-correct-mobile-width="false">
              <div class="row t613__header" data-auto-correct-mobile-width="false">
                <div class="col col-6 t613__left">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title">
                    {{ props.texts?.tableTitle }}
                  </div>
                </div>
                <div class="col col-3 t613__col t-align_center">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title2">
                    {{ props.texts?.tableOther }}
                  </div>
                </div>
                <div class="col col-3 t613__col t-align_center">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title3">
                    {{ props.texts?.tableExpand }}
                  </div>
                </div>
              </div>

              <!-- middle -->
              <div class="t613__middle" data-auto-correct-mobile-width="false">
                <div v-for="(row, idx) in props.texts?.rows" :key="idx" class="t613__middle_item"
                  data-auto-correct-mobile-width="false">
                  <div class="col col-6 t613__left t-valign_middle">
                    <div class="t613__title t613__middle_title t-descr t-descr_xs">
                      {{ row.left }}
                    </div>
                  </div>
                  <div class="col t613__col t613__width_50 t-align_center t-valign_middle">
                    <div class="t613__title t613__middle_title t-descr t-descr_xs">
                      <svg v-if="row.other === 'cross'" role="img" width="24px" height="24px" viewBox="0 0 24 24"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <circle fill="#F24613" cx="12" cy="12" r="12"></circle>
                          <polygon fill="#FFFFFF"
                            points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072">
                          </polygon>
                        </g>
                      </svg>
                      <svg v-else-if="row.other === 'check'" role="img" width="24px" height="24px" viewBox="0 0 24 24"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                          <polygon fill="#FFFFFF"
                            points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8">
                          </polygon>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class="col t613__col t613__width_50 t-align_center t-valign_middle">
                    <div class="t613__title t613__middle_title t-descr t-descr_xs">
                      <svg v-if="row.expand === 'check'" role="img" width="24px" height="24px" viewBox="0 0 24 24"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <circle fill="#25B309" cx="12" cy="12" r="12"></circle>
                          <polygon fill="#FFFFFF"
                            points="10.776 16.32 5.184 10.728 5.688 10.2 10.776 15.288 18.792 7.272 19.296 7.8">
                          </polygon>
                        </g>
                      </svg>
                      <svg v-else-if="row.expand === 'cross'" role="img" width="24px" height="24px" viewBox="0 0 24 24"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <circle fill="#F24613" cx="12" cy="12" r="12"></circle>
                          <polygon fill="#FFFFFF"
                            points="17.28 7.32 16.8 6.84 12.072 11.592 7.32 6.84 6.84 7.32 11.592 12.072 6.84 16.8 7.32 17.28 12.072 12.528 16.8 17.28 17.28 16.8 12.528 12.072">
                          </polygon>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

#compare {
  background-color: #eeeeee;
  padding: 50px 0;

  @include media.tablet {
    padding: 150px 0;
  }
}

.t613__wrapper {
  padding: 1rem;

  @include media.tablet {
    padding: 2rem;
  }
}

.t613__left {
width: auto;
min-width: auto;
}

.t613-col {
  display: block;
  overflow: visible;
}


.t613__left.col-6 {
  width: 50%;
}

.t613__title {
  font-size: 1rem;
  padding: 0;

  @include media.tablet {
    padding: 0 0 1.25rem 0;
  }
}

.t613__mobile {
  padding: 0 .5rem;
}

.t613__content {
  width: 100%;
}

.t613__header {
  display: flex;
}

.t613__middle_item {
  display: flex;
  align-items: center;
}

.t613__middle_title.t-descr.t-descr_xs {
  padding: 1rem 0;

  @include media.tablet {
    padding: 2rem 0;
  }
}
</style>
