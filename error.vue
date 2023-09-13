<script setup>
const error = useError();

definePageMeta({
    layout: "head"
})
</script>

<template>
    <div class="error-page">
        <div class="error-page-sign"><img src="~/assets/svg/errorsign.svg" alt=""></div>
        <h1 class="error-page-code">{{ error.statusCode }}</h1>
        <p class="error-page-explain" v-if="error.statusCode === 404">The page you are looking for can’t be found</p>
        <p class="error-page-explain" v-else>An error occurred</p>
        <UtilityButton type="link" to="/" size="medium">Back to home</UtilityButton>
    </div>
</template>

<style>
.error-page {
    margin-top: 138px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.error-page-sign {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding-top: 61px;
    padding-bottom: 5px;
}

.error-page-sign img {
    height: 100%;
}

.error-page-code {
    font-style: normal;
    font-weight: 500;
    font-size: 200px;
    line-height: 242px;
    text-align: center;
}

.error-page-explain {
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 60px;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .error-page {
        margin-top: 110px;
        width: 100%;
    }

    /* to be edited */
    .error-page-code {
        font-style: normal;
        font-weight: 500;
        font-size: 150px;
        line-height: 181px;
    }

    /* to be edited */
    .error-page-explain {
        font-size: 12px;
        line-height: 227.7%;
        margin-bottom: 40px;
    }
}
</style>
