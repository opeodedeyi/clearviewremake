<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits();

const closePopup = () => {
    emit("close-popup");
}

const acceptAnalyticsCookies = () => {
    emit("accept-analytics-cookie");
}

const rejectAnalyticsCookies = () => {
    emit("reject-analytics-cookie");
}
</script>


<template>
    <div class="cookie-popup-content">
        <div class="cookie-header">
            <p class="cookie-title">Our Cookies</p>
            <div class="cookie-header-cancle" @click="closePopup">
                <img src="~/assets/svg/cancel.svg" alt="x" />
            </div>
        </div>
        <p class="cookie-text">This website uses analytics cookies to help us improve it and give you the best possible experience. More information can be found in our <nuxt-link class="cookie-link" to="/cookiepolicy" target="_blank">Cookie Policy.</nuxt-link></p>
        <!-- button comes here -->
        <div class="cookie-options">
            <button class="cookie-accept" @click.prevent="acceptAnalyticsCookies">Accept Analytics Cookies</button>
            <button class="cookie-reject" @click.prevent="rejectAnalyticsCookies">Reject Analytics Cookies</button>
        </div>
    </div>
</template>

<style scoped>
.cookie-popup-content {
    position: fixed;
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: var(--color-gray);
    color: var(--color-dark);
    width: 100%;
    padding: 30px 78px;
    box-shadow: 0px 0 4px rgba(0, 0, 0, 0.1);
}

.cookie-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    margin-bottom: 20px
}

.cookie-header-cancle {
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
}

.cookie-header-cancle img {
    height: 100%;
    border-radius: 50%;
}

.cookie-title {
    font-weight: bold;
    font-size: 16px;
}

.cookie-text {
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 20px
}

.cookie-link {
    color: var(--color-danger);
}

.cookie-options {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
}

.cookie-accept,
.cookie-reject {
    font-size: 12px;
    line-height: 15px;
    background-color: var(--color-danger);
    color: var(--color-white);
    cursor: pointer;
}

.cookie-accept {
    padding: 16px 40px;
    background-color: var(--color-danger);
    color: var(--color-white);
    border: none;
    border-radius: 27px;
    margin-right: 20px;
    margin-bottom: 0;
}

.cookie-accept:hover {
    background-color: var(--color-danger-hover);
}

.cookie-reject {
    padding: 15px 39px;
    background-color: var(--color-gray);
    color: var(--color-danger);
    border: 1px solid var(--color-danger);
    border-radius: 31px;
}

.cookie-reject:hover {
    background-color: var(--color-danger);
    color: var(--color-gray);
}

@media only screen and (max-width: 1080px) {
    .cookie-popup-content {
        padding: 20px 30px;
    }

    .cookie-header {
        margin-bottom: 15px
    }

    .cookie-text {
        margin-bottom: 15px
    }

    .cookie-accept,
    .cookie-reject {
        font-size: 12px;
        line-height: 15px;
    }

    .cookie-accept {
        padding: 16px 39px;
        border-radius: 31px;
        margin-right: 20px;
        margin-bottom: 0;
    }

    .cookie-reject {
        padding: 16px 39px;
        border-radius: 31px;
    }
}

@media only screen and (max-width: 750px) {
    .cookie-options {
        flex-direction: column;
    }

    .cookie-accept,
    .cookie-reject {
        width: 100%;
    }

    .cookie-accept {
        margin-right: 0;
        margin-bottom: 10px;
    }
}
</style>