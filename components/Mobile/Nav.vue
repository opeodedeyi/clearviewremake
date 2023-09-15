<template>
    <div class="nav" :class="{ open: isvisible }">
        <div class="nav-header">
            <p class="nav-header-logo">Menu</p>
            <div class="nav-header-cancle" @click="cancel">
                <img src="~/assets/svg/cancel.svg" alt="x" />
            </div>
        </div>
        <ul class="nav-main">
            <!-- <li class="nav-item"><nuxt-link to="/">Home</nuxt-link></li> -->
            <li class="nav-item"><nuxt-link to="/aboutus">About Us</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/expertise">Our Expertise</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/casestudies">Case Studies</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/blog">Blogs</nuxt-link></li>
            <li class="nav-item"><nuxt-link to="/contactus">Contact Us</nuxt-link></li>
        </ul>
        <ul class="nav-social">
            <li class="nav-social-item mlrico"><a href="https://www.instagram.com/cvr_insights/"><img src="~/assets/svg/instagramicon.svg" alt="" /></a></li>
            <li class="nav-social-item mlrico"><a href="https://twitter.com/CVR_Insights"><img src="~/assets/svg/twittericon.svg" alt="" /></a></li>
            <li class="nav-social-item mlrico"><a href="https://www.facebook.com/CVR.Insights/"><img src="~/assets/svg/facebookicon.svg" alt="" /></a></li>
            <li class="nav-social-item mlrico"><a href="https://www.linkedin.com/company/clearview-research-ltd/"><img src="~/assets/svg/linkedinicon.svg" alt="" /></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        isvisible: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        cancel() {
            this.$emit("hide-nav");
        }
    }
}
</script>

<style scoped>
.mlrico {
    margin: 0 3.5px;
}

/* .nav-item a {
    position: relative;
}

.nav-item a.nuxt-link-exact-active:after,
.nav-item a:hover:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: var(--color-white);
} */

.nav-item a.nuxt-link-exact-active,
.nav-item a:hover {
    color: var(--color-danger);
}

.nav {
    font-family: 'Questrial', sans-serif;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: -420px;
    bottom: 0;
    z-index: 101;
    width: 100%;
    max-width: 420px;
    padding: 0 30px;
    background-color: var(--color-company);
    background-image: url('/svg/homepage-patterns-mobile.svg');
    color: var(--color-white);
    transition: right .3s;
    height: 100vh;
    overflow: hidden;
}

.open {
    right: 0;
}

.nav-header {
    height: 110px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
}

.nav-header p,
.nav-main li a {
    font-style: normal;
    font-weight: normal;
    font-size: 1.5625rem;
}

.nav-header-cancle {
    height: 45px;
}

.nav-header-cancle img {
    height: 100%;
}

.nav-main {
    padding: 0;
    list-style: none;
    text-align: center;
    width: 100%;
}

.nav-item {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
}

.nav-item-image {
    width: 20px;
    margin: 0 15px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}

.nav-item a {
    text-decoration: none;
    color: var(--color-white);
    font-size: 16px;
    /* line-height: 24px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
}

.nav-social {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    width: 100%;
    height: 88px;
    padding: 0;
}

.nav-social-item {
    text-decoration: none;
    list-style: none;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .nav {
        display: flex;
    }
}
</style>