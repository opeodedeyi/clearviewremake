<script setup>
  import { ref, onMounted } from 'vue';
  // import { useCookie } from '@vueuse/core';

  const menuTrigger = ref(0);
  const showCookieWarning = ref(false);

  // const showCookieWarningCookie = useCookie('showCookieWarning');
  // const disableAnalyticsCookie = useCookie('disableAnalytics');

  const showMenu = () => {
    menuTrigger.value++;
  }

  // const getCookies = () => {
  //   if (showCookieWarningCookie.value) {
  //     showCookieWarning.value = false;
  //   } else {
  //     showCookieWarning.value = true;
  //   }
  // }

  // const setCookies = () => {
  //   showCookieWarningCookie.value = true;
  //   disableAnalyticsCookie.value = false;
  // }

  // const acceptAnalyticsCookie = () => {
  //   disableAnalyticsCookie.value = false;
  //   showCookieWarningCookie.value = false;
  //   showCookieWarning.value = false;
  // }

  // const rejectAnalyticsCookie = () => {
  //   disableAnalyticsCookie.value = true;
  //   showCookieWarningCookie.value = false;
  //   showCookieWarning.value = false;
  // }

  // onMounted(() => {
  //   getCookies();
  // });
</script>

<template>
  <div>
    <HeaderMain :menuTrigger="menuTrigger" />
    <slot />
    <FooterMain @show-menu="showMenu()"/>
    <UtilityCookiePopup v-if="showCookieWarning" @close-popup="showCookieWarning=false" @accept-analytics-cookie="acceptAnalyticsCookie" @reject-analytics-cookie="rejectAnalyticsCookie"/>
  </div>
</template>
