import { createClient } from "contentful";
import contentful from 'contentful'

export default defineNuxtPlugin((nuxtApp) => {
    const runtimeConfig = useRuntimeConfig();

    const createClientFunc = process.env.NODE_ENV === 'development' ? createClient : contentful.createClient

    const client = createClientFunc({
        space: runtimeConfig.public.theSpaceId,
        accessToken: runtimeConfig.public.theAccessToken,
    });

    return {
        provide: {
            contentfulClient: client,
        },
    };
});