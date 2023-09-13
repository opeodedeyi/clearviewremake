<script setup>
    import { ref, onMounted } from 'vue';
    const runtimeConfig = useRuntimeConfig();
    import { createClient } from 'contentful';

    const client = createClient({
        space: runtimeConfig.public.theSpaceId,
        accessToken: runtimeConfig.public.theAccessToken,
    });

    useHead({
        title: 'Case Studies / ClearView Research',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'ClearView Research is a pioneering organization that has been at the forefront of impactful research studies, each with the aim of giving voice to underrepresented communities and empowering organizations with insights that spark positive change.',
            }
        ]
    });

    const projects = ref(null);
    const limit = ref(10);
    const page = ref(1);
    const total = ref(null);
    const loading = ref(false);
    
    async function getAllProjects(requestedLimit = limit.value, skip = 0) {
        loading.value = true;

        const response = await client.getEntries({
            content_type: 'caseStudies',
            order: '-sys.createdAt',
            limit: requestedLimit,
            skip
        });

        const fetchedProjects = response.items.map(item => {
            const { id, createdAt } = item.sys;
            const { slug, title } = item.fields;
            const featuredImage = item.fields.featuredImage.fields.file.url;
            return {
                id, slug, title, featuredImage, createdAt
            };
        });

        console.log(fetchedProjects);
        total.value = response.total;
        loading.value = false;
        projects.value = fetchedProjects;
    }

    async function loadMoreProjects(requestedLimit = limit.value, skip = limit.value * page.value) {
        loading.value = true;

        const response = await client.getEntries({
            content_type: 'caseStudies',
            order: '-sys.createdAt',
            limit: requestedLimit,
            skip
        });

        const additionalProjects = response.items.map(item => {
            const { id, createdAt } = item.sys;
            const { slug, title } = item.fields;
            const featuredImage = item.fields.featuredImage.fields.file.url;
            return {
                id, slug, title, featuredImage, createdAt
            };
        });

        page.value++;
        projects.value = [...projects.value, ...additionalProjects];
        loading.value = false;
    }

    onMounted(() => {
        getAllProjects();
    });
</script>

<template>
    <div class="casestudies">
        <div class="casestudies-title">
            Case Studies
        </div>
        <div class="casestudies-jumbo-cards" v-if="projects != null">
            <UtilityCaseStudyCard
                v-for="(result, index) in projects"
                :key="index"
                :slug="result.slug"
                :featuredImage="result.featuredImage"
                :title="result.title"
                :date="result.createdAt" />
        </div>
        <Loadingb v-if="loading"/>
        <div class="casestudies-loadmore" v-if="loading==false & limit*page<total & projects!=null"><UtilityButton type="button" size="medium" :onClick="loadMoreProjects">Load More Case Studies</UtilityButton></div>
    </div>
</template>

<style scoped>
.casestudies {
    margin-top: 138px;
}

.casestudies-title {
    width: 100%;
    padding: 70px 78px 80px;
    text-align: center;
    font-family: "Questrial";
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 77px;
}

.casestudies-jumbo-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 48px 24px;
    width: 100%;
    padding: 0 78px;
    margin-bottom: 84px;
}

.casestudies-loadmore {
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
    .casestudies {
        margin-top: 110px;
    }

    .casestudies-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .casestudies-title {
        width: 100%;
        padding: 40px 30px 60px;
        font-size: 45px;
        line-height: 128.5%;
    }
}

@media only screen and (max-width: 950px) {
    .casestudies-jumbo-cards {
        padding: 0 30px;
        margin-bottom: 78px;
    }

    .casestudies-loadmore {
        padding: 0 20px;
        margin-bottom: 32px;
    }
}

@media only screen and (max-width: 800px) {
    .casestudies-jumbo-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
