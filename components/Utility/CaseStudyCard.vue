<script setup>
import { defineProps } from 'vue';
import { useShortenText } from '@/composables/useShortenText';
import { useRouter } from 'vue-router';

// Props declaration
const props = defineProps({
    typeOf: {
        type: String,
        default: "default",
    },
    featuredImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const { truncate } = useShortenText();
const router = useRouter();

function goTocasestudy() {
    router.push(`/casestudies/${props.slug}`);
}
</script>

<template>
    <div v-if="typeOf == 'default'" class="casestudy-card">
        <div class="casestudy-card-image">
            <NuxtImg :src="featuredImage" format="webp" quality="70" alt="ima"/>
        </div>
        <div class="casestudy-card-content">
            <p class="casestudy-card-content-title">{{title}}</p>
            <button class="casestudy-card-content-button" @click.prevent="goTocasestudy">Read Case Study</button>
        </div>
    </div>
    <div v-else class="casestudy-card-fixed">
        <div class="casestudy-card-fixed-image">
            <NuxtImg :src="featuredImage" format="webp" quality="70" alt="ima"/>
        </div>
        <div class="casestudy-card-fixed-content">
            <p class="casestudy-card-fixed-content-title">{{ truncate(title, 23, '...') }}</p>
            <button class="casestudy-card-fixed-content-button" @click.prevent="goTocasestudy">Read Case Study</button>
        </div>
    </div>
</template>

<style scoped>
.casestudy-card {
    grid-column: span 6;
    border-radius: 20px;
}

.casestudy-card-image {
    width: 100%;
    height: 377px;
}

.casestudy-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
}

.casestudy-card-content {
    padding: 43px 60px 47px;
    background-color: var(--color-white);
    border-radius: 0 0 20px 20px;
}

.casestudy-card:hover .casestudy-card-content {
    background-color: var(--color-company);
}

.casestudy-card-content-title {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 143.2%;
    color: var(--color-company);
    margin-bottom: 20px;
}

.casestudy-card:hover .casestudy-card-content-title {
    color: var(--color-white);
}

.casestudy-card-content-button {
    text-decoration: none;
    border: 1px solid var(--color-danger);
    color: var(--color-danger);
    background-color: var(--color-white);
    border-radius: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    width: 189px;
    height: 62px;
    cursor: pointer;
}

.casestudy-card:hover .casestudy-card-content-button {
    border: 1px solid var(--color-white);
    color: var(--color-white);
    background-color: var(--color-company);
}

.casestudy-card-content-button:hover {
    text-decoration: none;
    background: var(--color-danger);
    color: var(--color-white);
}

.casestudy-card:hover .casestudy-card-content-button:hover {
    border: 1px solid var(--color-white);
    color: var(--color-company);
    background-color: var(--color-white);
}

.casestudyml {
    margin-left: 6px;
}

.casestudy-card-fixed {
    border-radius: 20px;
    height: 450px;
    width: 400px;
    margin-right: 40px;
}

.casestudy-card-fixed:nth-of-type(1) {
    margin-left: 120px;
}

.casestudy-card-fixed:last-of-type {
    margin-right: 120px;
}

.casestudy-card-fixed-image {
    width: 100%;
    height: 250px;
}

.casestudy-card-fixed-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
}

.casestudy-card-fixed-content {
    padding: 42px 40px 42px;
    background-color: var(--color-white);
    border-radius: 0 0 20px 20px;
}

.casestudy-card-fixed-content-title {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 143.2%;
    margin-bottom: 20px;
}

.casestudy-card-fixed-content-button {
    text-decoration: none;
    border: 1px solid var(--color-danger);
    color: var(--color-danger);
    background-color: var(--color-white);
    border-radius: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    width: 189px;
    height: 62px;
    cursor: pointer;
}

.casestudy-card-fixed:hover .casestudy-card-fixed-content-button {
    border: 1px solid var(--color-white);
    color: var(--color-white);
    background-color: var(--color-company);
}

.casestudy-card-fixed-content-button:hover {
    text-decoration: none;
    background: var(--color-danger);
    color: var(--color-white);
}

.casestudy-card-fixed:hover .casestudy-card-fixed-content-button:hover {
    border: 1px solid var(--color-white);
    color: var(--color-white);
    background-color: var(--color-company);
}

/* small screen */
@media only screen and (max-width: 1080px) {
    .casestudy-card-fixed {
        height: 354px;
        width: 270px;
        margin-right: 25px;
    }

    .casestudy-card-fixed:nth-of-type(1) {
        margin-left: 30px;
    }

    .casestudy-card-fixed:last-of-type {
        margin-right: 30px;
    }

    .casestudy-card-fixed-image {
        height: 224px;
    }

    .casestudy-card-fixed-content {
        padding: 26px 30px 29px;
    }

    .casestudy-card-fixed-content-title {
        font-size: 14px;
        line-height: 143.2%;
        margin-bottom: 17px;
    }

    .casestudy-card-fixed-content-button {
        font-size: 10px;
        line-height: 12px;
        width: 123px;
        height: 40px;
    }
}

@media only screen and (max-width: 800px) {
    .casestudy-card-image {
        height: 245px;
    }

    .casestudy-card-content {
        padding: 28px 32px 32px;
    }

    .casestudy-card-content-date {
        font-size: 12px;
        line-height: 227.7%;
        margin-top: 20px;
    }

    .casestudy-card-content-title {
        font-size: 12px;
        line-height: 143.2%;
    }

    .casestudy-card-content-button {
        width: 135px;
        height: 44px;
        font-size: 10px;
        line-height: 12px;
    }
}
</style>