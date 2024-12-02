<template>
    <footer class="LayoutFooter">
        <div
            class="container"
        >
            <TheSocial :list="socialList" />

            <span class="copy">
                @Malik WebDev 2021г.
            </span>
        </div>
    </footer>
</template>


<script 
    lang="ts"
    setup
>
    /** Imports **/
    /* vue */
    import {
        toRefs,
    } from "vue";

    /* types */
    import type { ILayoutFooterProps } from "./types";

    /* components */
    import TheSocial from "@/components/common/social/TheSocial.vue";

    /** Props **/
    const props = withDefaults(defineProps<ILayoutFooterProps>(), {
        socialList: () => [],
    });

    const { socialList } = toRefs(props);
</script>


<style lang="scss" scoped>
    .LayoutFooter {
        width: 100%;
        padding: $space-md 0;

        @include themify($themes) {
            background-color: themed(bg-footer);
            color: themed(cl-main);
            transition: $theme-transition;         
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .copy {
            font-size: $fz-sm;
        }
    }
</style>
  