<template>
    <div class="TheSocial">
        <a
            v-for="item in list"
            :key="item.link"
            :href="item.link"
            target="_blank"
            class="link"
        >
            <span @mouseenter="hoverLink = true" @mouseleave="hoverLink = false">

            <box-icon
                :type="item.type"
                :name="item.icon"
                color="#cce2ec"
                class="icon"
            />
            </span>
        </a>
    </div>
</template>


<script lang="ts" setup>
    /** Imports **/
    /* vue */
    import { 
        ref,
        toRefs,
        defineProps,
        withDefaults,
    } from "vue";

    /* libs */
    import "boxicons";

    /* types */
    import type { ITheSocialProps } from "../types";

    /** Props **/
    const props = withDefaults(defineProps<ITheSocialProps>(), {
        list: () => [],
    });

    const {
        list,
    } = toRefs(props);

    /** Data **/
    const hoverLink = ref(false);
</script>


<style 
    lang="scss"
    scoped
>
    .TheSocial {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;

        @include themify($themes) {
            .link {
                color: themed(cl-main);
            }

            .icon {
                color: inherit;
            }
        }

        .link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            transition: opacity 0.3s ease-in-out;

            &:hover {
                opacity: 0.7;
            }
        }
    }
</style>
