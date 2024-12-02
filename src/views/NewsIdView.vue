<template>
    <div class="container">
        <TheNewsId
            v-if="news && !isLoading"
            :item="news"
            @refresh="fetchData"
        />

        <TheLoader
            v-else-if="isLoading"
            size="lg"
            :blur=".4"
            :opacity=".4"
            class="loader"
        >
            <TheLoaderIcon />
        </TheLoader>
    </div>
</template>

<script
    lang="ts"
    setup
>
    /** Imports **/
    /* types */
    import type { INewsModel } from "@/api/models/news";

    /* vue */
    import { 
        ref,
        onMounted,
    } from "vue";
    
    
    /* router */
    import { 
        useRoute,
        useRouter,
    } from "vue-router";

    /* api */
    import { fetchItem } from "@/api/modules/news";
    
    /* components */
    import TheNewsId from "@/components/news/TheNewsId.vue";
    import TheLoader from "@/components/common/loader/TheLoader.vue";
    import TheLoaderIcon from "@/components/common/loader/TheLoaderIcon.vue";


    /** Data **/
    const isLoading = ref(false);
    const news = ref<INewsModel | null>(null);
    const route = useRoute();
    const router = useRouter();

    /** Handlers **/
    async function fetchData() {
        console.log('refresh');
        isLoading.value = true;

        try {
            const idx = Number(route.params.id);

            if (!isNaN(idx)) {
                news.value = await fetchItem(idx);
            } else {
                router.replace({path: "/"});
            }
        } catch (e) {
            console.warn('[NewsIdView/fetchData]: ', e);
        } finally {
            setTimeout(() => {
                isLoading.value = false;
            }, 400)
        }
    }

    onMounted(fetchData);
</script>

<style
    lang="scss"
    scoped
>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        @include themify($themes) {
            color: themed(primary);
            animation: colorAnimate 5s linear infinite;

            @keyframes colorAnimate {
                0% {
                    color: themed(bg-main);
                }
                20% {
                    color: themed(secondary);
                }
                40% {
                    color: themed(primary);
                }
                60% {
                    color: #20b78a;
                }
                80% {
                    color: #de9d29;
                }
                100% {
                    color: themed(bg-soft);
                }
            }
        }
    }
</style>