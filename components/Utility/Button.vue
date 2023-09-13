<template>
    <nuxt-link v-if="type==='li'" :to="to" tag="li" class="pl25 spc">
        <a :class="size" class="btn">
            <slot/>
        </a>
    </nuxt-link>
    <nuxt-link v-else-if="type==='link'" :to="to" :class="size" class="btn">
        <slot/>
    </nuxt-link>
    <button v-else :class="size" class="btn" @click.prevent="onClick">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            required: false,
            default: "small"
        },
        type: {
            type: String,
            required: false,
            default: "link"
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        onClick: {
            type: Function,
            required: false
        }
    }
}
</script>

<style scoped>
button,
a {
    text-decoration: none;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    transition: 0.5s ease;
}

button {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.btn {
    border: 1px solid var(--color-danger);
    background-color: var(--color-danger);
    color: var(--color-white) !important;
}

.btn:hover {
    border: 1px solid var(--color-danger-hover);
    background-color: var(--color-danger-hover);
    color: var(--color-white) !important;
    text-decoration: none;
}

.small {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 10.6px 24px;
    border-radius: 20px;
}

.medium {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    padding: 22px 55px;
    border-radius: 31px;
}

.more {
    height: 62px;
    width: 189px;
    border-radius: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
}

.header {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14.54px;
    padding: 16px 40px;
    text-align: center;
    border-radius: 27px;
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .medium {
        font-size: 12px;
        line-height: 15px;
        padding: 16px 40px;
        border-radius: 31px;
    }

    .more {
        height: 47px;
        width: 144px;
        border-radius: 27px;
        font-size: 12px;
        line-height: 15px;
    }
}

</style>