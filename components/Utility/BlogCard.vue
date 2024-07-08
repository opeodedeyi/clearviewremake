<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const props = defineProps({
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
    })

    function getCustomDate() {
        const date = new Date(props.date)
        let year = date.getFullYear()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let month = months[date.getMonth()]
        let dt = date.getDate()

        let newDate = `${dt} ${month}, ${year}`
        return newDate
    }

    function goToBlog() {
        console.log(`${props.slug}`);
        router.push(`/blog/${props.slug}`)
    }

</script>

<template>
    <div class="blog-card">
        <div class="blog-card-image">
            <NuxtImg :src="featuredImage" format="webp" quality="70" alt="ima"/>
        </div>
        <div class="blog-card-content">
            <p class="blog-card-content-date">{{getCustomDate()}}</p>
            <p class="blog-card-content-header">{{title}}</p>
            <p class="blog-card-content-description">{{description}}</p>
            <button class="blog-card-content-button" @click.prevent="goToBlog">Read Post</button>
        </div>
    </div>
</template>

<style scoped>
.blog-card {
    grid-column: span 6;
}

.blog-card-image {
    width: 100%;
    height: 390px;
}

.blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}

.blog-card-content-date {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 227.7%;
    color: var(--color-dark);
    opacity: 0.5;
    margin-top: 26px;
}

.blog-card-content-header {
    margin-top: 5px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 143.2%;
    color: var(--color-company);
}

.blog-card-content-description {
    margin-top: 15px;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 227.7%;
    color: var(--color-dark);
}

.blog-card-content-button {
    text-decoration: none;
    border: 1px solid var(--color-danger);
    background: var(--color-gray);
    color: var(--color-danger);
    border-radius: 31px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    width: 189px;
    height: 62px;
    cursor: pointer;
}

.blog-card-content-button:hover {
    text-decoration: none;
    background: var(--color-danger);
    color: var(--color-white);
}

.blogml {
    margin-left: 6px;
}

/* small screen */
@media only screen and (max-width: 800px) {
    .blog-card-image {
        height: 270px;
    }

    .blog-card-content-date {
        font-size: 12px;
        line-height: 227.7%;
        margin-top: 20px;
    }

    .blog-card-content-header {
        font-size: 22px;
        line-height: 143.2%;
    }

    .blog-card-content-description {
        font-size: 12px;
        line-height: 227.7%;
    }

    .blog-card-content-button {
        width: 157px;
        height: 51.5px;
        font-size: 15px;
        line-height: 18px;
    }
}
</style>