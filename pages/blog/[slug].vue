<script setup>
    import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
    import { BLOCKS, INLINES } from "@contentful/rich-text-types";
    const route = useRoute()
    const { $contentfulClient } = useNuxtApp();

    const mainPdf = ref(null);
    const moreblogs = ref(null);
    const limit = ref(2);
    const loading = ref(false);

    function getCustomDate(passedDate) {
        const date = new Date(passedDate);
        let year = date.getFullYear();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[date.getMonth()];
        let dt = date.getDate();

        let newDate = `${dt} ${month}, ${year}`
        return newDate
    }

    const fetchData = async () => {
        const response = await $contentfulClient.getEntries({
            content_type: 'blog',
            'fields.slug': route.params.slug
        });

        return response.items.map(item => {
            let renderOptions = {
                renderNode: {
                    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                        if (node.data.target.sys.contentType.sys.id === "codeBlock") {
                            return `<pre>
                                <code>${node.data.target.fields.code}</code>
                            </pre>`;
                        }

                        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
                            return `<iframe
                                src='${node.data.target.fields.embedUrl}'
                                height='100%'
                                width='100%'
                                frameBorder='0'
                                scrolling='no'
                                title='${node.data.target.fields.title}'
                                allowFullScreen=true
                            />`;
                        }
                    },
                    [INLINES.HYPERLINK]: (node, next) => {
                        if (node.data.uri.includes("player.vimeo.com/video")) {
                            return `<div class="iframe-container">
                                <iframe
                                title="${next(node.content)}"
                                src="${node.data.uri}"
                                frameBorder='0'
                                allowFullScreen
                                ></iframe>
                            </div>`;
                        } else if (node.data.uri.includes("youtube.com/embed")) {
                            return `<div class="iframe-container">
                                <iframe
                                title="${next(node.content)}"
                                src="${node.data.uri}"
                                allow='accelerometer; encrypted-media; gyroscope; picture-in-picture'
                                frameBorder='0'
                                allowFullScreen
                                ></iframe>
                            </div>`;
                        } else {
                            return `<span class="color">
                            <a href="${node.data.uri}">${next(node.content)}</a>
                            </span>`;
                        }
                    },
                    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                        return `<div class="content-img"><img
                            src="https:${node.data.target.fields.file.url}"
                            width='100%'
                            alt="${node.data.target.fields.description}"
                            /></div>`;
                    },
                },
            }

            const { id, createdAt } = item.sys;
            const { title, description } = item.fields;
            const featuredImage = item.fields.featuredImage.fields.file.url;
            const content = item.fields.details;
            const details = documentToHtmlString(content, renderOptions);
            const customDate = getCustomDate(createdAt);

            return {
                id, title, featuredImage, description, details, createdAt, customDate
            };
        });
    };

    const { data: blogDetails, pending, error, refresh } = await useAsyncData('blogDetails', fetchData);

    useHead({
        title: blogDetails.value[0].title, // 'Blog / ClearView Research',
        // meta: [
        //     {
        //         hid: 'description',
        //         name: 'description',
        //         content: blogDetails.value[0].details  // route.params.slug.replace(/-/g, ' '),
        //     }
        // ],
    });

    useSeoMeta({
        // description: blogDetails.value[0].details,
        // ogDescription: blogDetails.value[0].details,
        ogTitle: blogDetails.value[0].title,
        ogImage: blogDetails.value[0].featuredImage,
        twitterCard: 'summary_large_image',
    })
    
    async function getTwoBlogs(requestedLimit = limit.value, skip = 0) {
        loading.value = true;
        console.log(`slug - ${route.params.slug}`)

        const response = await $contentfulClient.getEntries({
            content_type: 'blog',
            order: '-sys.createdAt',
            'fields.slug[nin]': route.params.slug,
            limit: requestedLimit,
            skip
        });

        console.log(`response - ${response}`)

        const blogs = response.items.map(item => {
            const { id, createdAt } = item.sys;
            const { slug, title, description } = item.fields;
            const featuredImage = item.fields.featuredImage.fields.file.url;
            return {
                id, slug, title, description, featuredImage, createdAt
            };
        });

        moreblogs.value = blogs;
        loading.value = false;
    }

    async function getPdf(slug) {
        const response = await $contentfulClient.getEntries({
            content_type: 'blog',
            'fields.slug': slug
        });

        const pdf = response.items.map(item => item.fields.attachedPdf.fields.file.url);

        mainPdf.value = pdf[0];
    }

    function openPdf() {
        const anchor = document.createElement('a');
        anchor.href = mainPdf.value;
        anchor.target = "_blank";
        anchor.click();
    }
        
    onMounted(() => {
        getPdf(route.params.slug)
        getTwoBlogs()
    });
</script>

<template>
    <div class="blog-main">
        <div v-if="blogDetails!=null" class="blog-main-cont">
            <div class="blog-title">
                <div class="blog-date">{{blogDetails[0].customDate}}</div>
                <div class="blog-titlee">{{blogDetails[0].title}}</div>
            </div>
            <div class="blog-main-image">
                <NuxtImg :src="blogDetails[0].featuredImage" alt="" format="webp" sizes="sm:1000px md:1100px lg:1200px"/>
            </div>
            <div class="blog-main-content" v-html="blogDetails[0].details"></div>
            
            <div class="blog-learn-more" v-if="mainPdf!=null">
                <div class="blog-hl"></div>
                <p class="blog-learn-more-title">Click to find out more about {{blogDetails[0].title}}</p>
                <div class="blog-readmore"><UtilityButton size="more" type="btn" :onClick="openPdf">Read More</UtilityButton></div>
            </div>
        </div>
        <loadingb v-else-if="blogDetails===null"/>

        <div v-if="moreblogs!=null" class="blog-more-cont">
            <div class="blog-hl"></div>
            <p class="blog-more-title">Other Posts</p>
            <div class="blog-more-cards" v-if="moreblogs != null">
                <UtilityBlogCard
                    v-for="(result, index) in moreblogs"
                    :key="index"
                    :slug="result.slug"
                    :featuredImage="result.featuredImage"
                    :title="result.title"
                    :description="result.description"
                    :date="result.createdAt" />
            </div>
        </div>
        <loadingb v-else-if="moreblogs===null & blogDetails!=null"/>
    </div>
</template>

<style>
.blog-main {
    margin-top: 138px;
}

.blog-main-cont {
    width: 100%;
}

.blog-title {
    width: 100%;
    padding: 70px 78px 80px;
}

.blog-date {
    font-family: "Libre Franklin";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    text-align: center;
    color: rgba(0, 0, 0, 0.29);
}

.blog-titlee {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 118%;
    text-align: center;
    margin-top: 5px;
}

.blog-main-image {
    width: 100%;
    height: 439px;
}

.blog-main-image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.blog-main-content {
    margin-top: 66px;
    padding: 0 200px 42px;
}

.blog-main-content p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 227.7%;
    color: var(--color-dark);
    padding: 20px 0;
}

.blog-main-content a {
    text-decoration: none;
    color: var(--color-danger);
}

.blog-main-content a:hover {
    color: var(--color-company);
    text-decoration: underline;
}

.blog-more-cont {
    padding: 0 78px;
}

.blog-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
    margin-bottom: 61px;
}

.blog-more-title {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 118%;
    margin-bottom: 36px;
}

.blog-more-cards {
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 200px));
    gap: 48px 24px;
    width: 100%;
    margin-bottom: 96px;
}

.blog-learn-more {
    width: 100%;
    padding: 0 200px;
    margin-bottom: 76px;
}

.blog-hl {
    height: 1px;
    background-color: var(--color-danger);
    width: 100%;
    margin-bottom: 91px;
}

.blog-learn-more-title {
    font-family: 'Questrial';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 118%;
    text-align: center;
    margin-bottom: 30px;
}

.blog-readmore {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.blog-read-more {
    padding: 0 78px;
}


/* small screen */
@media only screen and (max-width: 1080px) {
    .blog-main {
        margin-top: 110px;
    }

    .blog-title {
        width: 100%;
        padding: 41px 30px 70px;
    }

    .blog-titlee {
        font-size: 35px;
        line-height: 118%;
        margin-top: 8px;
    }

    .blog-main-image {
        height: 424px;
    }

    .blog-main-content {
        margin-top: 59px;
        padding: 0 30px 31px;
    }

    .blog-main-content p {
        font-size: 12px;
        line-height: 227.7%;
        padding: 12px 0;
    }

    .blog-date {
        font-size: 15px;
        line-height: 227.7%;
    }

    .blog-more-cont {
        padding: 0 30px;
    }

    .blog-hl {
        margin-bottom: 31px;
    }

    .blog-more-title {
        font-size: 25px;
        line-height: 161%;
        margin-bottom: 32px;
    }

    .blog-more-cards {
        margin-bottom: 82px;
    }

    .blog-learn-more {
        padding: 0 30px;
        margin-bottom: 66px;
    }

    .blog-hl {
        margin-bottom: 53px;
    }

    .blog-learn-more-title {
        font-size: 20px;
        line-height: 168.5%;
        margin-bottom: 26px;
    }

    .blog-read-more {
        padding: 0 30px;
    }
}

@media only screen and (max-width: 800px) {
    .blog-more-cards {
        grid-template-columns: repeat(6, minmax(auto, 150px));
        gap: 50px 24px;
    }
}
</style>
