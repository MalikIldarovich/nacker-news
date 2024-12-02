<template>
    <div
        :class="['app', `theme-${theme}`]"
    >
        <layouts-default 
            :theme="theme"
            @change:theme="handleChangeTheme"
        >
            <router-view />
        </layouts-default>
    </div>
</template>


<script
    setup
    lang="ts"
>
    /** Imports **/
    /* vue */
    import {
        ref
    } from 'vue';

    /* components */
    import LayoutsDefault from "@/layouts/LayoutsDefault.vue";

    /** Data **/
    const theme = ref<"dark" | "light">("dark");

    /** Handlers **/
    const handleChangeTheme = (val: boolean) => {
        if (val) {
            theme.value = "light";
        } else {
            theme.value = "dark";
        }
    };
</script>


<style
    lang="scss"
    scoped
>
</style>
