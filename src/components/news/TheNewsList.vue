<template>
    <div class="TheNewsList">
        <transition name="fade">
            <div 
                v-show="!isLoading"
                :key="`visible-list-${!isLoading}`"
                class="content"
            >
                <div class="top">
                    <h1 class="heading">
                        <span v-html="'Новости'" />
                        <span class="count" v-html="`${list.length}`" />
                    </h1>

                    <button
                        class="refresh"
                        @click="onRefresh"
                    >
                        <box-icon
                            name="refresh"
                            color="currentColor"
                            class="icon"
                        />
                    </button>
                </div>

                <ul
                    v-if="list.length"
                    class="list"
                >
                    <TheNewsItem 
                        v-for="(item, index) in list"
                        :key="item.id"
                        :index="index"
                        :item="item"
                        class="item"
                    />
                </ul>
            </div>
        </transition>

        <transition name="fade">
            <TheLoader
                v-show="isLoading"
                :key="`visible-loader-${isLoading}`"
                size="lg"
                :blur=".4"
                :opacity=".4"
                class="loader"
            >
                <TheLoaderIcon />
            </TheLoader>
        </transition>
    </div>
</template>

<script
    lang="ts"
    setup
>
    /** Imports **/
    /* types */
    import type { ITheNewsListProps } from "@/components/news/types";
    
    /* vue */
    import {
        toRefs,
        defineProps,
        withDefaults,
    } from "vue";

    import "boxicons";

    /* components */
    import TheLoader from "@/components/common/loader/TheLoader.vue";
    import TheLoaderIcon from "@/components/common/loader/TheLoaderIcon.vue";
    import TheNewsItem from "@/components/news/TheNewsItem.vue";
    
    /** Props **/
    const props = withDefaults(defineProps<ITheNewsListProps>(), {
        list: () => [],
        isLoading: false,
    });
    
    const { list, isLoading } = toRefs(props);
    
    /** Emits **/
    const emit = defineEmits(["refresh"]);

    /** Handlers **/
    const onRefresh = () => {
        emit("refresh");
    };
</script>

<style
    lang="scss"
    scoped
>
    .TheNewsList {
        .top {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: $space-md;
            margin: $space-lg 0;
        }

        .heading {
            display: flex;
            align-items: center;
            gap: $space-md;
            text-align: center;
            font-size: $fz-h1;
            font-weight: 600;
        }

        .refresh {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: $space-xs;
            border-radius: 8px;
        }

        .icon {
            width: 32px;
            height: 32px;
        }

        .list {
            border-radius: 16px;
            overflow: hidden;
        }

        .loader {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @include themify($themes) {
            .heading {
                color: themed(cl-main);
                transition: $theme-transition;

                .count {
                    color: themed(primary);
                    transition: $theme-transition;
                }
            }

            .refresh {
                background-color: themed(bg-soft);
                color: themed(cl-main);
                transition: $theme-transition;

                @include hover {
                    background-color: themed(cl-main);
                    color: themed(bg-soft);
                }
            }

            .loader {
                color: themed(primary);
                animation: colorAnimate 5s linear infinite;
            }

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

        @media (max-width: $lg) {
            .top {
                margin: $space-sm 0;
            }

            .heading {
                font-size: $fz-h4;
            }
        }

        @media (max-width: $sm) {
            .heading {
                font-size: $fz-h6;
            }
        }
    }
</style>