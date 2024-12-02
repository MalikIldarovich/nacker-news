<template>
    <div class="container">
        <TheNewsList
            :list="news"
            :is-loading="isLoading"
            @refresh="fetchData"
        />
    </div>
</template>

<script 
    setup
    lang="ts"
>
    /** Imports **/
    /* types */
    import type { INewsModel } from "@/api/models/news";
    
    /* vue */
    import { 
        ref,
        onMounted,
        onUnmounted,
    } from "vue";

    /* api */
    import { fetchNews, fetchItem } from "@/api/modules/news";
    
    /* components */
    import TheNewsList from "@/components/news/TheNewsList.vue";

    const isLoading = ref(false);
    const news = ref<INewsModel[]>([]);
    let intervalId: NodeJS.Timeout | null = null;

    async function fetchData(withoutLoader?: boolean | null) {
        if (!withoutLoader) {
            isLoading.value = true;
            console.log("Updated news by user or first loading");
        } else {
            console.log("Automatic update news");
        }

        try {
            const list = await Promise.all(
                (await fetchNews()).map(async (id: number) => await fetchItem(id))
            );

            if (list?.length) {
                news.value = [...list.sort((a, b) => b.time - a.time)];
            }
        } catch (e) {
            console.warn('[NewsView/fetchData]: ', e);
        } finally {
            isLoading.value = false;
        }
    }

    /** Lifecycle Hooks **/
    onMounted(() => {
        fetchData();
        intervalId = setInterval(() => fetchData(true), 60000);
    });

    onUnmounted(() => {
        if (intervalId) {
            clearInterval(intervalId);
        }
    });
</script>