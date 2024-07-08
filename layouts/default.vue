<script setup>
  const gtagPopupDecision = useCookie("gtagPopupDecision") // can be ("undecided", "decided")
  const { gtag } = useGtag()

  const menuTrigger = ref(0);
  const showCookiePopup = ref(false);

  if (!gtagPopupDecision.value) gtagPopupDecision.value = "undecided"

  const showMenu = () => {
    menuTrigger.value++;
  }

  const getCookies = () => {
    if (gtagPopupDecision.value === "undecided") {
      showCookiePopup.value = true;
    } else {
      showCookiePopup.value = false;
    }
  }

  const acceptAnalyticsCookie = () => {
    gtagPopupDecision.value = "decided";
    showCookiePopup.value = false;
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted'
    })
  }

  const rejectAnalyticsCookie = () => {
    gtagPopupDecision.value = "decided";
    showCookiePopup.value = false;
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
