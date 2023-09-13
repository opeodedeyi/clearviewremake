<script setup>
    import { ref, onMounted } from 'vue';
    const runtimeConfig = useRuntimeConfig();
    import { createClient } from 'contentful';

    const client = createClient({
        space: runtimeConfig.public.theSpaceId,
        accessToken: runtimeConfig.public.theAccessToken,
    });

    useHead({
        title: 'Blog / ClearView Research',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Our blog serves as an extension of our commitment to sharing these insights and fostering informed conversations.',
            }
        ]
    });
    
    const blogs = ref(null);
    const limit = ref(20);
    const page = ref(1);
    const total = ref(null);
    const loading = ref(false);

    onMounted(() => {
        getAllBlogs();
    });

    async function getAllBlogs(requestedLimit = limit.value, skip = 0) {
        loading.value = true
        const response = await client.getEntries({
            content_type: 'blog',
            order: '-sys.createdAt',
            limit: requestedLimit,
            skip
        })
        const processedBlogs = response.items.map((item) => {
            const { id, createdAt } = item.sys
            const { slug, title, description } = item.fields
            const featuredImage = item.fields.featuredImage.fields.file.url
            return {
                id, slug, title, featuredImage, description, createdAt
            }
        })
        console.log(processedBlogs);
        total.value = response.total
        loading.value = false
        blogs.value = processedBlogs
    }

    async function loadMoreBlogs(requestedLimit = limit.value, skip = limit.value * page.value) {
        loading.value = true
        const response = await client.getEntries({
            content_type: 'blog',
            order: '-sys.createdAt',
            limit: requestedLimit,
            skip
        })
        const additionalBlogs = response.items.map((item) => {
            const { id, createdAt } = item.sys
            const { slug, title, description } = item.fields
            const featuredImage = item.fields.featuredImage.fields.file.url
            return {
                id, slug, title, description, featuredImage, createdAt
            }
        })
        page.value++
        blogs.value = [...blogs.value, ...additionalBlogs]
        loading.value = false
    }
</script>

<template>
    <div class="blog">
        <div class="blog-title">
            Blogs
        </div>
        <div class="blog-jumbo-cards" v-if="blogs != null">
            <UtilityBlogCard
                v-for="(result, index) in blogs"
                :key="index"
                :slug="result.slug"
                :featuredImage="result.featuredImage"
                :title="result.title"
                :description="result.description"
                :date="result.createdAt" />
        </div>
        <UtilityLoadingb v-if="loading"/>
        <div class="blog-loadmore" v-if="loading==false & limit*page<total & blogs!=null"><UtilityButton type="button" size="medium" :onClick="loadMoreBlogs">Load More Blogs</UtilityButton></div>
    </div>
</template>

<style>
.blog {
    margin-top: 138px;
}

.blog-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.blog-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 62px 24px;
    width: 100%;
    padding: 0 78px;
    margin-bottom: 84px;
}

.blog-loadmore {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 100px;
    padding: 0 64px;
}

@media only screen and (max-width: 1080px) {
    .blog {
        margin-top: 110px;
    }

    .blog-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .blog-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }
}

@media only screen and (max-width: 950px) {
    .blog-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .blog-loadmore {
        padding: 0 20px;
        margin-bottom: 32px;
    }
}

@media only screen and (max-width: 800px) {
    .blog-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
