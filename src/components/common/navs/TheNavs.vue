<template>
    <nav class="TheNavs">
        <router-link
            v-for="item in list"
            :key="item.to"
            :to="item.to"
            class="link"
            active-class="nav-link-active"
        >
            {{ item.title }}
        </router-link>
    </nav>
</template>


<script 
    lang="ts"
    setup
>
    /** Imports **/
    /* vue */
    import {
        toRefs,
        defineProps,
        withDefaults,
    } from "vue";

    /* types */
    import type { ILayoutNavProps } from "../types";

    /** Props **/
    const props = withDefaults(defineProps<ILayoutNavProps>(), {
        list: () => [],
    });

    const { list } = toRefs(props);
</script>


<style 
    lang="scss"
    scoped
>
    .TheNavs {
        display: flex;
        align-items: center;
        gap: $space-xl;

        .link {
            position: relative;
            transition: all 0.3s ease-in-out;

            &::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -8px;
                height: 2px;
                width: 0;
                transition: all 0.3s ease-in-out;
            }

            &:hover::after {
                width: 100%;
            }

            @include themify($themes) {
                color: themed(primary);
                transition: $theme-transition;

                @include hover {
                    color: themed(cl-main);
                }
            }
        }

        .link-active {
            cursor: default;

            &:hover::after {
                width: 0;
            }
        }

        @media (max-width: $sm) {
            width: 100%;
            gap: $space-xs;
            justify-content: space-around;
        }
    }
</style>
