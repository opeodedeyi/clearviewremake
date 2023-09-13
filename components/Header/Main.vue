<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

// Props
const props = defineProps({
  menuTrigger: {
    type: Number
  }
})

// Data
const ses = ref(false)
const showMenuBar = ref(false)

// Computed
const route = useRoute()
const page = computed(() => route.name)

// Watchers
watch(route, () => {
  showMenuBar.value = false
})

watch(() => props.menuTrigger, () => {
  showMenuBar.value = true;
})

// Methods
const hideNav = () => {
  showMenuBar.value = false
}

const onScroll = () => {
  const currentScrollPosition = window.pageYOffset
  if (currentScrollPosition < 0) {
    return
  }
  if (Math.abs(currentScrollPosition) > 5) {
    ses.value = true
    return
  }
  ses.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="header" :class="{ extraStyling: page != 'index' || ses }">
    <NuxtLink to="/" class="header-logo">
      <img src="~/assets/svg/logo.svg" class="logo-color" alt="" />
    </NuxtLink>
    <div class="header-content desk">
      <ul class="header-content-links">
        <li class="header-item"><NuxtLink to="/aboutus" class="plr-header">About Us</NuxtLink></li>
        <li class="header-item"><NuxtLink to="/expertise" class="plr-header">Our Expertise</NuxtLink></li>
        <li class="header-item"><NuxtLink to="/casestudies" class="plr-header">Case Studies</NuxtLink></li>
        <li class="header-item"><NuxtLink to="/blog" class="plr-header">Blogs</NuxtLink></li>
        <UtilityButton type="li" to="/contactus" size="header">Contact Us</UtilityButton>
      </ul>
    </div>
    <div class="header-menu-bar mob" @click="showMenuBar = true">
      <img src="~/assets/svg/menubar.svg" alt="+" />
    </div>
    <MobileNav @hide-nav="hideNav()" :isvisible="showMenuBar"/>
    <MobileOverlay v-show="showMenuBar" @hide-nav="hideNav()"/>
  </header>
</template>


<style scoped>
.header {
  height: 138px; /* 5.5rem */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 78px;
  z-index: 99;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

a {
  text-decoration: none;
}

.logo-color {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg) brightness(103%) contrast(103%);
}

.header-content ul {
  list-style: none;
  padding: 0;
}

.header-logo {
  height: 45px;
}

.header-logo img {
  height: 100%;
}

.header-content-links {
  display: flex;
  flex-direction: row;
}

.header-content-links a {
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-white);
}

/* active class */
.header-item a.nuxt-link-exact-active,
.header-item a:hover {
  color: var(--color-danger);
}

.header-menu-bar {
  height: 45px;
  cursor: pointer;
}

.header-menu-bar img {
  height: 100%;
}

.extraStyling {
  background-color: var(--color-gray);
  /* box-shadow: 0px 0 4px rgba(0, 0, 0, 0.1); */
}

.extraStyling a {
  color: var(--color-dark);
  text-decoration: none;
}

.extraStyling .logo-color {
  filter: invert(0%) sepia(0%) saturate(17%) hue-rotate(292deg) brightness(101%) contrast(106%);
}

.mob {
  display: none;
}

/* small screen */
@media only screen and (max-width: 1080px) {
  .header {
    padding: 0 30px;
    height: 110px;
  }

  .desk {
    display: none;
  }

  .mob {
    display: block;
  }

  .header-logo {
    height: 45px;
  }
}
</style>
