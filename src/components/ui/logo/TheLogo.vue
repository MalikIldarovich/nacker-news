<template>
    <router-link 
        :to="to"
        class="TheLogo"
    >
        <img 
            :alt="alt"
            :src="src"
            class="logo-image"
        />
    </router-link>
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
    } from 'vue';

    /* types */
    import { ITheLogoProps } from './types';

    /** Props **/
    const props = withDefaults(defineProps<ITheLogoProps>(), {
        to: "/",
        alt: "Logo",
        src: "/logo.png",
    });

    const {
        to,
        alt,
        src,
    } = toRefs(props);
</script>


<style lang="scss" scoped>
    .TheLogo {
        width: 120px;
        height: 70px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        transition: all 0.3s ease-in-out;
        animation: colorAnimate 5s linear infinite;

        @include themify($themes) {
            background-color: themed(primary);
            transition: $theme-transition;

            @keyframes colorAnimate {
                0% {
                    background-color: themed(bg-main);
                }
                20% {
                    background-color: themed(secondary);
                }
                40% {
                    background-color: themed(primary);
                }
                60% {
                    background-color: #20b78a;
                }
                80% {
                    background-color: #de9d29;
                }
                100% {
                    background-color: themed(bg-soft);
                }
            }
        }
    }
</style>

  