<script setup>
  import { ref, onMounted } from 'vue';
  const popupDecidion = useCookie("popupDecidion") // can be ("undecided", "decided")
  const allowAnalytics = useCookie("allowAnalytics") // can be (true, false)
  const { gtag, grantConsent, revokeConsent } = useGtag()

  const menuTrigger = ref(0);
  const showCookiePopup = ref(false);

  if (!popupDecidion.value) popupDecidion.value = "undecided"
  if (!allowAnalytics.value) allowAnalytics.value = false

  const showMenu = () => {
    menuTrigger.value++;
  }

  const getCookies = () => {
    if (popupDecidion.value === "undecided") {
      showCookiePopup.value = true;
    } else {
      showCookiePopup.value = false;
    }
  }

  const acceptAnalyticsCookie = () => {
    popupDecidion.value = "decided";
    showCookiePopup.value = false;
    allowAnalytics.value = true;
    grantConsent();
  }

  const rejectAnalyticsCookie = () => {
    popupDecidion.value = "decided";
    showCookiePopup.value = false;
    allowAnalytics.value = false;
    revokeConsent();
  }

  onMounted(() => {
    getCookies();
  });
</script>

<template>
  <div>
    <HeaderMain :menuTrigger="menuTrigger" />
    <slot />
    <FooterMain @show-menu="showMenu()"/>
    <UtilityCookiePopup v-if="showCookiePopup" @close-popup="showCookiePopup=false" @accept-analytics-cookie="acceptAnalyticsCookie" @reject-analytics-cookie="rejectAnalyticsCookie"/>
  </div>
</template>
