<template>
    <div class="TheNewsId">
        <div class="top">
            <h1 
                v-if="item.title"
                class="heading"
                v-html="item.title"
            />
        </div>

        <ul class="list">
            <li 
                v-for="el in newsContent"
                :key="el.id"
                class="item"
            >
                <div class="info">
                    <box-icon
                        :name="el.icon.name"
                        :type="el.icon.type"
                        color="currentColor"
                        class="icon"
                    />
                    
                    <span
                        class="text"
                        v-html="el.value ? el.value : 'Отсутствует'"
                    />
                </div>
            </li>

            <li
                class="refresh"
                @click="onRefresh"
            >
                <box-icon
                    name="refresh"
                    color="currentColor"
                    class="icon"
                />
            </li>
        </ul>

        <iframe
            v-if="item.url"
            :src="item.url"
            frameborder="0"
            class="iframe"
        />

        <TheNewsComments 
            :ids="item.kids || []"
        />

        <div class="actions">
            <button
                :class="['action', 'back']"
                @click="onBack"
            >
                <span v-html="'Вернуться назад'" />
                <box-icon
                    name="arrow-back"
                    color="currentColor"
                    class="icon"
                />
            </button>

            <a 
                v-if="item.url"
                :href="item.url"
                target="_blank"
                :class="['action', 'source']"
            >
                <span v-html="'Перейти в источник'" />
                <box-icon 
                    name="link-alt"
                    color="currentColor"
                    class="icon"
                />
            </a>
        </div>
    </div>
</template>

<script
    lang="ts"
    setup
>
    /** Imports **/
    /* types */
    import type { ITheNewsIdProps } from "@/components/news/types";

    /* vue */
    import {
        toRefs, 
        computed,
        defineEmits,
        defineProps,
        // reactive,
    } from "vue";
    
    /* vue-router */
    import { useRouter } from "vue-router";

    /* utils */
    import { getNewsInfoList } from "@/assets/utils/content-utils";
    
    /* utils */
    import TheNewsComments from "@/components/news/TheNewsComments.vue";

    /** Props **/
    const props = defineProps<ITheNewsIdProps>();

    const { item } = toRefs(props);
    
    /** Data **/
    const router = useRouter();

    /** Computed **/
    const newsContent = computed(() => getNewsInfoList(item.value).slice(1));

    /** Emits **/
    const emit = defineEmits(["refresh"]);

    /** Handlers **/
    const onRefresh = () => {
        emit('refresh');
    };

    const onBack = () => {
        router.go(-1);
    };
    
</script>

<style
    lang="scss"
    scoped
>
    .TheNewsId {
        height: 100%;
        padding: $space-md;
        border-radius: 32px;

        @include themify($themes) {
            background-color: rgba(themed(bg-soft), .8);
            color: themed(cl-soft);
            box-shadow: themed(shadow-sm);
            transition: $theme-transition;

            .heading {
                color: themed(cl-main);
                transition: $theme-transition;
            }

            .info {
                color: themed(cl-soft);
                transition: $theme-transition;
            }

            .refresh {
                background-color: themed(primary);
                color: themed(cl-main);
                transition: $theme-transition;

                @include hover {
                    background-color: themed(cl-main);
                    color: themed(bg-soft);
                }
            }

            .action {
                transition: $theme-transition;

                &.source {
                    background-color: themed(primary);
                    color: themed(cl-main);
                }

                &.back {
                    background-color: themed(bg-main);
                    color: themed(cl-main);
                }

                @include hover {
                    opacity: .7;
                }
            }
        }

        .top {
            display: flex;
            align-items: center;
            gap: $space-md;
            margin: $space-lg 0;
        }

        .heading {
            display: flex;
            align-items: center;
            gap: $space-md;
            font-size: $fz-h1;
            font-weight: 600;
        }

        .list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: $space-md;
            margin-bottom: $space-md;
        }

        .item {
            display: flex;
            align-items: center;
            gap: $space-md;
        }

        .info {
            display: flex;
            align-items: center;
            gap: $space-xs;
            max-width: 100%;
            text-align: left;
            white-space: nowrap;
            font-size: $fz-md;
            font-weight: 600;

            .text {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .refresh {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: $space-xs;
            border-radius: $space-xs;
            cursor: pointer;
        }

        .icon {
            width: 20px;
            min-width: 20px;
            height: 20px;
        }

        .iframe {
            width: 100%;
            height: 60vh;
            margin-bottom: $space-md;
        }

        .actions {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: $space-md;
        }

        .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: $space-sm;
            padding: $space-sm $space-md;
            border-radius: $space-sm;
        }

        @media (max-width: $lg) {
            .heading {
                font-size: $fz-h4;
            }
        }

        @media (max-width: $md) {
            .actions {
                flex-direction: column;
            }

            .action {
                width: 100%;
            }
        }

        @media (max-width: $sm) {
            .heading {
                font-size: $fz-h6;
            }
        }
    }
</style>
