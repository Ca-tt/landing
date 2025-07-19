<script setup lang="ts">

const texts = {
  title: 'Як починається навчання?',
  steps: [
    {
      number: 1,
      title: '1. Вводний урок',
      descr: 'Визначаємо рівень навичок <br />та першу мову програмування',
      flipped: false,
    },
    {
      number: 2,
      title: '2. Підбираємо день та час заняття',
      descr: 'Різні студенти — різні побажання<br />Оберемо графік, комфортний саме для вас',
      flipped: true,
    },
    {
      number: 3,
      title: '3. Звіт за перший місяць',
      descr: 'Перші успіхи — і перший <br />зворотній зв\'язок!',
      flipped: false,
    },
  ],
}
</script>

<template>
  <div id="rec622692145" class="r t-rec t-rec_pt_120 t-rec_pb_150" style="padding-top: 120px; padding-bottom: 180px"
    data-record-type="565">
    <div class="t565">
      <div class="t-section__container t-container t-container_flex">
        <div class="t-col t-col_12">
          <div class="t-section__title t-title t-title_xs t-align_center t-margin_auto" field="btitle">
            {{ texts.title }}
          </div>
        </div>
      </div>

      <div class="t-container t565__container">
        <div v-for="(step, idx) in texts.steps" :key="idx" class="t565__item t-item">
          <div class="t-width t-width_10 t565__mainblock">
            <div :class="['t565__col', step.flipped ? 't565__flipped' : '']">
              <div class="t565__linewrapper">
                <div class="t565__line" style="width: 2px; background-color: #0c132b"></div>
                <div class="t565__circle" style="border-width: 2px; border-color: #0c132b; background: #ffffff">
                  <div class="t565__number t-name t-name_md" style="color: #0c132b">{{ step.number }}</div>
                </div>
              </div>
              <div :class="step.flipped ? 't565__block-flipped' : 't565__block'">
                <div class="t565__title t-name t-name_lg">
                  {{ step.title }}
                </div>
                <div class="t565__descr t-text t-text_xs">
                  <span v-html="step.descr"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
