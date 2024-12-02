<script setup lang="ts">

/* svg icons */
import PhoneIcon from '@svg/social-icons/PhoneIcon.vue';
import ViberIcon from '@svg/social-icons/ViberIcon.vue';
import TelegramIcon from '@svg/social-icons/TelegramIcon.vue';
import YouTubeIcon from '@svg/social-icons/YouTubeIcon.vue';


let iconSize = 42;

</script>

<template>
  <div id="rec622692140" class="r t-rec t-rec_pt_0 t-rec_pb_0"
    style="background-color: #ffffff" data-animationappear="off"
    data-record-type="257" data-bg-color="#ffffff">

    <div id="nav622692140marker"></div>
    <!-- ? mobile menu burger -->
    <div class="tmenu-mobile tmenu-mobile_positionfixed">
      <div class="tmenu-mobile__container">
        <div class="tmenu-mobile__text t-name t-name_md" field="menu_mob_title">&nbsp;</div>
        <button type="button" class="t-menuburger t-menuburger_second" aria-label="Navigation menu"
          aria-expanded="false">
          <span style="background-color: #000000"></span>
          <span style="background-color: #000000"></span>
          <span style="background-color: #000000"></span>
          <span style="background-color: #000000"></span>
        </button>

      </div>
    </div>

    <!-- mobile menu -->
    <div id="nav622692140"
      class="t228 t228__positionfixed t228__beforeready tmenu-mobile__menucontent_hidden tmenu-mobile__menucontent_fixed"
      style="background-color: rgb(255, 255, 255); top: 0; opacity: 0;" data-bgcolor-hex="#ffffff"
      data-bgcolor-rgba="rgba(255,255,255,1)" data-navmarker="nav622692140marker" data-appearoffset="700px"
      data-bgopacity-two="100" data-menushadow="50" data-menushadow-css="" data-bgopacity="1"
      data-bgcolor-rgba-afterscroll="rgba(255,255,255,1)" data-menu-items-align="center" data-menu="yes">
      <!-- desktop menu -->
      <div class="t228__maincontainer d-lg-flex px-lg-3 align-items-lg-center">
        <div class="t228__padding40px"></div>
        <div class="t228__leftside py-2">
          <div class="t228__leftcontainer p-0">
            <a href="/" class="t228__imgwrapper">
              <img class="t228__imglogo t228__imglogomobile m-0 p-0"
                src="/images/tild6534-3132-4064-a561-383963393838__expand-sqr.png" imgfield="img"
                style="max-width: 85px;" alt="" />
            </a>
          </div>
        </div>

        <!-- ? menu links -->
        <div class="t228__centerside">
          <nav class="t228__centercontainer p-0">
            <ul role="list" class="t228__list t-menu__list t228__list_hidden p-0 m-0">
              <li class="t228__list_item" style="padding: 0 15px 0 0">
                <a class="t-menu__link-item" href="#features" data-menu-submenu-hook="" data-menu-item-number="1">
                  Нашi фiшки
                </a>
              </li>

              <li class="t228__list_item" style="padding: 0 15px 0 0">
                <a class="t-menu__link-item" href="#compare" data-menu-submenu-hook="" data-menu-item-number="1">
                  Ми vs iншi курси
                </a>
              </li>

              <li class="t228__list_item" style="padding: 0 15px">
                <a class="t-menu__link-item" href="#reviews" data-menu-submenu-hook="" data-menu-item-number="3">
                  Що про нас кажуть?
                </a>
              </li>

              <li class="t228__list_item" style="padding: 0 15px">
                <a class="t-menu__link-item" href="#plans" data-menu-submenu-hook="" data-menu-item-number="2">
                  Ціна
                </a>
              </li>

              <li class="t228__list_item" style="padding: 0 15px">
                <a class="t-menu__link-item" href="#contacts" data-menu-submenu-hook="" data-menu-item-number="5">
                  Зв'язатись
                </a>
              </li>
            </ul>
          </nav>
        </div>


        <!-- ? social icons -->
        <div class="t228__rightside">
          <div class="t228__rightcontainer py-4">
            <div class="t-sociallinks">
              <ul role="list" class="t-sociallinks__wrapper p-0 m-0" aria-label="Social media links">

                <li class="t-sociallinks__item t-sociallinks__item_phone">
                  <a href="tel:+38 093 967 90 96" target="_blank" rel="nofollow" aria-label="phone"
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
        <div class="t228__padding40px"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tmenu-mobile {
  z-index: 999999;
  background-color: transparent
}

.tmenu-mobile {
  background-color: #111;
  display: none;
  width: 100%;
  top: 0;
  z-index: 990;
}

/* item with text (hidden menu)  */
.t-menu__link-item {
  font-size: 1.1rem;
}

/* header blocks */
.t228 {

}
.t228__maincontainer {
}

/* header inner blocks */
.t228__leftside, .t228__rightside, .t228__centerside {
  display: block;
}



.t228__rightside {
  min-width: auto !important;
}


.t228__leftcontainer a {
  color: #ffffff;
}

a.t-menu__link-item {
  color: #000000;
  font-weight: 600;
}

.t228__right_langs_lang a {
  color: #000000;
  font-weight: 600;
}

.tmenu-mobile_positionfixed {
  position: fixed;
}

.tmenu-mobile__text {
  color: #fff;
}

.tmenu-mobile__container {
  min-height: 64px;
  padding: 20px;
  position: relative;
  box-sizing: border-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.tmenu-mobile__list {
  display: block;
}

.tmenu-mobile__burgerlogo {
  display: inline-block;
  font-size: 24px;
  font-weight: 400;
  white-space: nowrap;
  vertical-align: middle;
}

.tmenu-mobile__imglogo {
  height: auto;
  display: block;
  max-width: 300px !important;
  box-sizing: border-box;
  padding: 0;
  margin: 0 auto;
}

@media screen and (max-width: 980px) {
  .tmenu-mobile__menucontent_hidden {
    display: none;
    height: 100%;
  }

  .tmenu-mobile {
    display: block;
  }
}

@media screen and (max-width: 980px) {
  #rec622692140 .tmenu-mobile {
    background-color: #ffffff;
  }

  #rec622692140 .tmenu-mobile__menucontent_fixed {
    position: fixed;
    top: 64px;
  }

  #rec622692140 .t-menuburger {
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
}

#rec622692140 .tmenu-mobile__burgerlogo a {
  color: #ffffff;
}

#rec622692140 .tmenu-mobile__burgerlogo__title {
  color: #ffffff;
}


.t-menuburger {
  position: relative;
  flex-shrink: 0;
  width: 28px;
  height: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
  outline: none;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  z-index: 999;
}

.t-menuburger span {
  display: block;
  position: absolute;
  width: 100%;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
  height: 3px;
  background-color: #000;
}

.t-menuburger span:nth-child(1) {
  top: 0px;
}

.t-menuburger span:nth-child(2),
.t-menuburger span:nth-child(3) {
  top: 8px;
}

.t-menuburger span:nth-child(4) {
  top: 16px;
}

.t-menuburger__big {
  width: 42px;
  height: 32px;
}

.t-menuburger__big span {
  height: 5px;
}

.t-menuburger__big span:nth-child(2),
.t-menuburger__big span:nth-child(3) {
  top: 13px;
}

.t-menuburger__big span:nth-child(4) {
  top: 26px;
}

.t-menuburger__small {
  width: 22px;
  height: 14px;
}

.t-menuburger__small span {
  height: 2px;
}

.t-menuburger__small span:nth-child(2),
.t-menuburger__small span:nth-child(3) {
  top: 6px;
}

.t-menuburger__small span:nth-child(4) {
  top: 12px;
}

.t-menuburger-opened span:nth-child(1) {
  top: 8px;
  width: 0%;
  left: 50%;
}

.t-menuburger-opened span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.t-menuburger-opened span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.t-menuburger-opened span:nth-child(4) {
  top: 8px;
  width: 0%;
  left: 50%;
}

.t-menuburger-opened.t-menuburger__big span:nth-child(1) {
  top: 6px;
}

.t-menuburger-opened.t-menuburger__big span:nth-child(4) {
  top: 18px;
}

.t-menuburger-opened.t-menuburger__small span:nth-child(1),
.t-menuburger-opened.t-menuburger__small span:nth-child(4) {
  top: 6px;
}

@media (hover),
(min-width: 0\0) {
  .t-menuburger_first:hover span:nth-child(1) {
    transform: translateY(1px);
  }

  .t-menuburger_first:hover span:nth-child(4) {
    transform: translateY(-1px);
  }

  .t-menuburger_first.t-menuburger__big:hover span:nth-child(1) {
    transform: translateY(3px);
  }

  .t-menuburger_first.t-menuburger__big:hover span:nth-child(4) {
    transform: translateY(-3px);
  }
}

.t-menuburger_second span:nth-child(2),
.t-menuburger_second span:nth-child(3) {
  width: 80%;
  left: 20%;
  right: 0;
}

@media (hover),
(min-width: 0\0) {

  .t-menuburger_second.t-menuburger-hovered span:nth-child(2),
  .t-menuburger_second.t-menuburger-hovered span:nth-child(3) {
    animation: t-menuburger-anim 0.3s ease-out normal forwards;
  }

  .t-menuburger_second.t-menuburger-unhovered span:nth-child(2),
  .t-menuburger_second.t-menuburger-unhovered span:nth-child(3) {
    animation: t-menuburger-anim2 0.3s ease-out normal forwards;
  }
}

.t-menuburger_second.t-menuburger-opened span:nth-child(2),
.t-menuburger_second.t-menuburger-opened span:nth-child(3) {
  left: 0;
  right: 0;
  width: 100% !important;
}

.t-menuburger_third span:nth-child(4) {
  width: 70%;
  left: unset;
  right: 0;
}

@media (hover),
(min-width: 0\0) {
  .t-menuburger_third:not(.t-menuburger-opened):hover span:nth-child(4) {
    width: 100%;
  }
}

.t-menuburger_third.t-menuburger-opened span:nth-child(4) {
  width: 0 !important;
  right: 50%;
}

.t-menuburger_fourth {
  height: 12px;
}

.t-menuburger_fourth.t-menuburger__small {
  height: 8px;
}

.t-menuburger_fourth.t-menuburger__big {
  height: 18px;
}

.t-menuburger_fourth span:nth-child(2),
.t-menuburger_fourth span:nth-child(3) {
  top: 4px;
  opacity: 0;
}

.t-menuburger_fourth span:nth-child(4) {
  top: 8px;
}

.t-menuburger_fourth.t-menuburger__small span:nth-child(2),
.t-menuburger_fourth.t-menuburger__small span:nth-child(3) {
  top: 3px;
}

.t-menuburger_fourth.t-menuburger__small span:nth-child(4) {
  top: 6px;
}

.t-menuburger_fourth.t-menuburger__small span:nth-child(2),
.t-menuburger_fourth.t-menuburger__small span:nth-child(3) {
  top: 3px;
}

.t-menuburger_fourth.t-menuburger__small span:nth-child(4) {
  top: 6px;
}

.t-menuburger_fourth.t-menuburger__big span:nth-child(2),
.t-menuburger_fourth.t-menuburger__big span:nth-child(3) {
  top: 6px;
}

.t-menuburger_fourth.t-menuburger__big span:nth-child(4) {
  top: 12px;
}

@media (hover),
(min-width: 0\0) {
  .t-menuburger_fourth:not(.t-menuburger-opened):hover span:nth-child(1) {
    transform: translateY(1px);
  }

  .t-menuburger_fourth:not(.t-menuburger-opened):hover span:nth-child(4) {
    transform: translateY(-1px);
  }

  .t-menuburger_fourth.t-menuburger__big:not(.t-menuburger-opened):hover span:nth-child(1) {
    transform: translateY(3px);
  }

  .t-menuburger_fourth.t-menuburger__big:not(.t-menuburger-opened):hover span:nth-child(4) {
    transform: translateY(-3px);
  }
}

.t-menuburger_fourth.t-menuburger-opened span:nth-child(1),
.t-menuburger_fourth.t-menuburger-opened span:nth-child(4) {
  top: 4px;
}

.t-menuburger_fourth.t-menuburger-opened span:nth-child(2),
.t-menuburger_fourth.t-menuburger-opened span:nth-child(3) {
  opacity: 1;
}

@keyframes t-menuburger-anim {
  0% {
    width: 80%;
    left: 20%;
    right: 0;
  }

  50% {
    width: 100%;
    left: 0;
    right: 0;
  }

  100% {
    width: 80%;
    left: 0;
    right: 20%;
  }
}

@keyframes t-menuburger-anim2 {
  0% {
    width: 80%;
    left: 0;
  }

  50% {
    width: 100%;
    right: 0;
    left: 0;
  }

  100% {
    width: 80%;
    left: 20%;
    right: 0;
  }
}
</style>
