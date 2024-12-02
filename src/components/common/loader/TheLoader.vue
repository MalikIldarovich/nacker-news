<template>
    <div
        :class="[$style.Loader, 'flx-rw-cntr-cntr']"
        :style="{ backdropFilter: `blur(${blur}rem)` }"
    >
        <div
            :class="[$style.overlay, $style[background]]"
            :style="{ opacity }"
        />

        <div :class="[$style.content, $style[size]]">
            <div :class="$style.wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    /** Imports **/
    /* types */
    import type { ITheLoaderProps } from "../types";
    
    /* vue */
    import {
        toRefs,
        withDefaults,
        defineProps,
    } from "vue";

    /** Props **/
    const props = withDefaults(defineProps<ITheLoaderProps>(), {
        blur: 0,
        opacity: 1,
        size: () => "lg",
        background: () => "default",
    });

    const {
        blur,
        size,
        opacity,
        background,
    } = toRefs(props);
</script>

<style
    lang="scss"
    module
>
    .Loader {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;

        @include themify($themes) {
            transition: $theme-transition;
        }

        .content {
            position: relative;
            z-index: 1;

            &.sm {
                .wrapper {
                    width: 4rem;
                    height: 4rem;
                }
            }
            
            &.md {
                .wrapper {
                    width: 6rem;
                    height: 6rem;
                }
            }
            
            &.lg {
                .wrapper {
                    width: 8rem;
                    height: 8rem;
                }
            }
            
            &.xl {
                .wrapper {
                    width: 12rem;
                    height: 12rem;
                }
            }
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;

        @include themify($themes) {
            &.default {
                background-color: themed(bg-soft);
            }

            &.dark {
                background: themed(base-800);
            }
            
            &.light {
                background: themed(base-200);
            }

            &.transparent {
                background: transparent;
            }
        }
    }
</style>
