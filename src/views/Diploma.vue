<script setup lang="ts">
import Header from '@components/Header.vue';
import Cover from '@components/Cover.vue';
import Features from '@components/Features.vue';
import CompareTable from '@/components/CompareTable.vue';
import ReviewsSlider from '@/components/ReviewsSlider.vue';
import Steps from '@/components/Steps.vue';
import GroupPlans from '@/components/GroupPlans.vue';
import PersonalPlans from '@/components/PersonalPlans.vue';
import Footer from '@components/Footer.vue';

import { headerTexts } from '@/texts/diploma/header';
import { coverTexts } from '@/texts/diploma/cover';
import { featuresTexts } from '@/texts/diploma/features';
import { compareTableTexts } from '@/texts/diploma/compareTable';

import { reviewsSliderTexts } from '@/texts/diploma/reviewsSlider';
import { stepsTexts } from '@/texts/diploma/steps';

import { groupPlansTexts } from '@/texts/diploma/groupPlans';
import { personalPlansTexts } from '@/texts/diploma/personalPlans';

import { footerTexts } from '@/texts/diploma/footer';
</script>

<template>
  <div id="allrecords" data-tilda-export="yes" class="t-records" data-hook="blocks-collection-content-node"
    data-tilda-project-id="5378947" data-tilda-page-id="38526013" data-tilda-formskey="fdbccf67f11802593467bcdfb5378947"
    data-tilda-cookie="no" data-tilda-lazy="yes" data-tilda-project-lang="UK" data-tilda-root-zone="one">

    <div id="rec622692138" class="r t-rec" style="" data-animationappear="off" data-record-type="360">
    </div>

    <!-- ? loading line indicator -->
    <div id="rec622692139" class="r t-rec" style="" data-animationappear="off" data-record-type="602">
      <div class="t602">
        <div class="t602__indicator" style=""></div>
      </div>
    </div>
    <Header :texts="headerTexts" />
    <Cover :texts="coverTexts" />
    <Features :texts="featuresTexts" />
    <Steps :texts="stepsTexts" />
    <!-- <CompareTable :texts="compareTableTexts" /> -->
    <GroupPlans :texts="groupPlansTexts" />
    <PersonalPlans :texts="personalPlansTexts" />
    <ReviewsSlider :texts="reviewsSliderTexts" />
    <Footer :texts="footerTexts" />
  </div>
</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";
</style>
