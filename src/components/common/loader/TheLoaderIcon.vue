<template>
    <div
        ref="loaderIconContainer"
        :class="[
            'TheLoaderIcon',
            size,
        ]">
        <svg v-if="type === 'dots'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="4" cy="12" r="3" fill="currentColor">
                <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"/>
            </circle>
            <circle cx="12" cy="12" r="3" fill="currentColor">
                <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"/>
            </circle>
            <circle cx="20" cy="12" r="3" fill="currentColor">
                <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"/>
            </circle>
        </svg>
        <svg v-if="type === 'grid'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect width="7.33" height="7.33" x="1" y="1" fill="currentColor">
                <animate id="svgSpinnersBlocksWave0" attributeName="x" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="y" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="width" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="0;svgSpinnersBlocksWave1.end+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.1s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="1;4;1"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.2s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor">
                <animate attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="8.33;11.33;8.33"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.3s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
            <rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor">
                <animate id="svgSpinnersBlocksWave1" attributeName="x" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="y" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="15.66;18.66;15.66"/>
                <animate attributeName="width" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/>
                <animate attributeName="height" begin="svgSpinnersBlocksWave0.begin+0.4s" dur="0.6s" values="7.33;1.33;7.33"/>
            </rect>
        </svg>
        <svg v-if="type === 'circle'"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle cx="12" cy="3" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle0" attributeName="r" begin="0;svgSpinners6DotsScaleMiddle2.end-0.5s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="16.5" cy="4.21" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle1" attributeName="r" begin="svgSpinners6DotsScaleMiddle0.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="7.5" cy="4.21" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle2" attributeName="r" begin="svgSpinners6DotsScaleMiddle4.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="19.79" cy="7.5" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle3" attributeName="r" begin="svgSpinners6DotsScaleMiddle1.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="4.21" cy="7.5" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle4" attributeName="r" begin="svgSpinners6DotsScaleMiddle6.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="21" cy="12" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle5" attributeName="r" begin="svgSpinners6DotsScaleMiddle3.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="3" cy="12" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle6" attributeName="r" begin="svgSpinners6DotsScaleMiddle8.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="19.79" cy="16.5" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle7" attributeName="r" begin="svgSpinners6DotsScaleMiddle5.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="4.21" cy="16.5" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle8" attributeName="r" begin="svgSpinners6DotsScaleMiddlea.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="16.5" cy="19.79" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddle9" attributeName="r" begin="svgSpinners6DotsScaleMiddle7.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="7.5" cy="19.79" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddlea" attributeName="r" begin="svgSpinners6DotsScaleMiddleb.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
                <circle cx="12" cy="21" r="0" fill="currentColor">
                <animate id="svgSpinners6DotsScaleMiddleb" attributeName="r" begin="svgSpinners6DotsScaleMiddle9.begin+0.1s" calcMode="spline" dur="0.6s" keySplines=".27,.42,.37,.99;.53,0,.61,.73" values="0;2;0"/>
            </circle>
        </svg>
    </div>
</template>

<script setup lang="ts">
    /** Imports **/
    /* types */
    import type { ITheLoaderIconProps } from "../types";

    /* vue */
    import {
        ref,
        toRefs,
        withDefaults,
        defineProps,
    } from "vue";
    
    /** Props **/
    const props = withDefaults(defineProps<ITheLoaderIconProps>(), {
        type: "grid",
        size: () => "sm",
        withSekeleton: true,
    });

    const { type } = toRefs(props);

    /** Data **/
    const loaderIconContainer = ref<HTMLDivElement | null>(null);
</script>

<style
    lang="scss"
    module
>
    .TheLoaderIcon {
        &.xs {
            width: 1.6rem;
            height: 1.6rem;
        }

        &.sm {
            width: 2.4rem;
            height: 2.4rem;
        }

        &.md {
            width: 4.8rem;
            height: 4.8rem;
        }

        &.lg {
            width: 6.4rem;
            height: 6.4rem;
        }

        &.xl {
            width: 7.2rem;
            height: 7.2rem;
        }

        &.full {
            width: 100%;
            height: 100%;
        }

        &.is-loading {
            position: relative;
            overflow: hidden;
            border-radius: .4rem;

            &:after {
                content: "";
                animation: skeleton-animation 1.2s infinite;
                height: 100%;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
                transform: translateX(-100%);
                z-index: 1;
                background: linear-gradient( 90deg, rgba(255, 255, 255, 0), gray, rgba(255, 255, 255, 0));
            }

            @keyframes skeleton-animation {
                from {
                    transform: translateX(-100%);
                }
                to {
                    transform: translateX(100%);
                }
            }
        }
    }
</style>