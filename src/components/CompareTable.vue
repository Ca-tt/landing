<script setup lang="ts">

const texts = {
  title: 'Якість, яку бачиш на кожному занятті',
  descr: 'Заняття з Даміром VS занятя на інших курсах 🙃',
  tableTitle: 'Порівняння',
  tableOther: 'Інші курси',
  tableExpand: 'Школа EXPAND',
  rows: [
    {
      left: 'Консультації між заняттями',
      other: 'cross',
      expand: 'check',
    },
    {
      left: 'Плавний перехід між рівнями',
      other: 'cross',
      expand: 'check',
    },
    {
      left: 'Додаткові завдання для проектів',
      other: 'cross',
      expand: 'check',
    },
    {
      left: 'Групи по 2 студенти',
      other: 'cross',
      expand: 'check',
    },
    {
      left: 'Немає різких підйомів цін',
      other: 'cross',
      expand: 'check',
    },
    {
      left: 'Персональні звіти про успіхи',
      other: 'cross',
      expand: 'check',
    },
  ],
}

</script>

<template>
  <div id="compare" class="r t-rec t-rec_pb_150" data-animationappear="off" data-record-type="613"
    data-bg-color="#eeeeee">
    <div class="t613">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto mb-3" field="btitle">
            {{ texts.title }}
          </div>
          <div class="t-section__descr t-descr t-descr_xl t-align_center t-margin_auto mb-5" field="bdescr">
            <span v-html="texts.descr"></span>
          </div>
        </div>
      </div>

      <div class="t613__container t-container">
        <div class="t613__content t-col t-col_10 t-prefix_1" data-auto-correct-mobile-width="false">
          <div class="t613__mobile" data-auto-correct-mobile-width="false">
            <div class="t613__wrapper" style="" data-auto-correct-mobile-width="false">
              <div class="t613__header" style="" data-auto-correct-mobile-width="false">
                <div class="t613__left" style="min-width: 260px; width: 260px">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title">
                    {{ texts.tableTitle }}
                  </div>
                </div>
                <div class="t613__col t613__width_50 t-align_center" style="">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title2">
                    {{ texts.tableOther }}
                  </div>
                </div>
                <div class="t613__col t613__width_50 t-align_center" style="">
                  <div class="t613__title t613__header_title t-name t-name_md" field="title3">
                    {{ texts.tableExpand }}
                  </div>
                </div>
              </div>
              <div class="t613__middle" data-auto-correct-mobile-width="false">
                <div v-for="(row, idx) in texts.rows" :key="idx" class="t613__middle_item" style=""
                  data-auto-correct-mobile-width="false">
                  <div class="t613__left t-valign_middle" style="min-width: 260px; width: 260px">
                    <div class="t613__title t613__middle_title t-descr t-descr_xs">
                      {{ row.left }}
                    </div>
                  </div>
                  <div class="t613__col t613__width_50 t-align_center t-valign_middle" style="">
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
                  <div class="t613__col t613__width_50 t-align_center t-valign_middle" style="">
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

/**
* ? table left text
*/
.t613__title {
  font-size: 1rem;
}
</style>
