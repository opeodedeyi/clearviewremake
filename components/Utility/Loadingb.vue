<template>
    <div class="loading">
        <div class="loading-spinner"></div>
    </div>
</template>

<style scoped>
.loading {
    width: 100%;
    padding: 20px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 150px 0 150px;
}

@-webkit-keyframes rotate-forever {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@-moz-keyframes rotate-forever {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotate-forever {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.loading-spinner {
    -webkit-animation-duration: 0.75s;
    -moz-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: rotate-forever;
    -moz-animation-name: rotate-forever;
    animation-name: rotate-forever;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 5px solid var(--color-company);
    border-right-color: transparent;
}

@media only screen and (max-width: 950px) {
    .loading {
        padding: 0 20px;
        margin: 150px 0 150px;
    }
}
</style>